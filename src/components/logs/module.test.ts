import { describe, it, expect } from 'vitest';
import { parseLogLines, parseName, filterLog } from './module';
import { MatchedLogLine } from './Log';
import {
  VALID_SAY_LOG,
  VALID_PARTY_LOG,
  VALID_SHOUT_LOG,
  VALID_WHISPER_LOG,
  CROSSWORLD_PLAYER_LOG,
  LOG_WITH_APOSTROPHE,
  LOG_WITH_SPECIAL_CHARS,
  INVALID_NO_PIPE,
  INVALID_WRONG_PREFIX,
  INVALID_MISSING_FIELDS,
  EMPTY_LINE,
  WHITESPACE_LINE,
  MULTI_LINE_LOG,
  EXPECTED_SAY_PARSED,
  EXPECTED_PARTY_PARSED,
  EXPECTED_CROSSWORLD_PARSED,
  NAME_TESTS,
} from '../../test/fixtures/logSamples';


describe('parseLogLines', () => {
  it('should parse a valid SAY log line', () => {
    const result = parseLogLines(VALID_SAY_LOG);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(EXPECTED_SAY_PARSED);
  });

  it('should parse a valid PARTY log line', () => {
    const result = parseLogLines(VALID_PARTY_LOG);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(EXPECTED_PARTY_PARSED);
  });

  it('should parse a cross-world player log line', () => {
    const result = parseLogLines(CROSSWORLD_PLAYER_LOG);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(EXPECTED_CROSSWORLD_PARSED);
  });

  it('should handle names with apostrophes', () => {
    const result = parseLogLines(LOG_WITH_APOSTROPHE);

    expect(result).toHaveLength(1);
    expect(result[0].sender).toBe('Y\'shtola Rhul');
  });

  it('should handle messages with special characters', () => {
    const result = parseLogLines(LOG_WITH_SPECIAL_CHARS);

    expect(result).toHaveLength(1);
    expect(result[0].message).toBe('Message with !@#$% special chars');
  });

  it('should convert channel codes to uppercase', () => {
    const logWithLowercase = '00|2024-01-15T14:23:45.1234567-08:00|000a|Test User|Message|abc123';
    const result           = parseLogLines(logWithLowercase);

    expect(result[0].code).toBe('000A');
  });

  it('should filter out invalid log lines', () => {
    const result = parseLogLines(INVALID_NO_PIPE);

    expect(result).toHaveLength(0);
  });

  it('should filter out logs with wrong prefix', () => {
    const result = parseLogLines(INVALID_WRONG_PREFIX);

    expect(result).toHaveLength(0);
  });

  it('should filter out logs with missing fields', () => {
    const result = parseLogLines(INVALID_MISSING_FIELDS);

    expect(result).toHaveLength(0);
  });

  it('should handle empty lines', () => {
    const result = parseLogLines(EMPTY_LINE);

    expect(result).toHaveLength(0);
  });

  it('should handle whitespace-only lines', () => {
    const result = parseLogLines(WHITESPACE_LINE);

    expect(result).toHaveLength(0);
  });

  it('should parse multi-line logs correctly', () => {
    const result = parseLogLines(MULTI_LINE_LOG);

    // Should have 4 valid lines (2 invalid/empty lines filtered out)
    expect(result).toHaveLength(4);

    // Verify first and last valid entries
    expect(result[0]).toEqual(EXPECTED_SAY_PARSED);
    expect(result[3]).toEqual(EXPECTED_CROSSWORLD_PARSED);
  });

  it('should handle logs with different channel codes', () => {
    const multiChannelLog = `${VALID_SAY_LOG}
${VALID_PARTY_LOG}
${VALID_SHOUT_LOG}
${VALID_WHISPER_LOG}`;

    const result = parseLogLines(multiChannelLog);

    expect(result).toHaveLength(4);
    expect(result[0].code).toBe('000A'); // SAY
    expect(result[1].code).toBe('000E'); // PARTY
    expect(result[2].code).toBe('000B'); // SHOUT
    expect(result[3].code).toBe('0039'); // WHISPER
  });

  it('should extract time in HH:MM:SS format', () => {
    const result = parseLogLines(VALID_SAY_LOG);

    expect(result[0].time).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  });
});

describe('parseName', () => {
  NAME_TESTS.forEach(({ input, expected }) => {
    it(`should parse "${input}" as "${expected}"`, () => {
      const result = parseName(input);
      expect(result).toBe(expected);
    });
  });

  it('should handle names from the same server (no realm)', () => {
    const result = parseName('Erston Greatman');
    expect(result).toBe('Erston Greatman');
    expect(result).not.toContain('🌸');
  });

  it('should add flower emoji for cross-world players', () => {
    const result = parseName('Erston GreatmanBrynhildr');
    expect(result).toContain('🌸');
    expect(result).toBe('Erston Greatman🌸Brynhildr');
  });

  it('should handle names with apostrophes', () => {
    const result = parseName('Y\'shtola Rhul');
    expect(result).toBe('Y\'shtola Rhul');
  });

  it('should handle names with apostrophes and realms', () => {
    const result = parseName('Y\'shtola RhulExcalibur');
    expect(result).toBe('Y\'shtola Rhul🌸Excalibur');
  });
});

describe('filterLog', () => {
  const mockLog: MatchedLogLine[] = [
    { time: '14:23:45', code: '000A', sender: 'User1', message: 'Say message' },
    { time: '14:24:12', code: '000E', sender: 'User2', message: 'Party message' },
    { time: '14:25:30', code: '000B', sender: 'User3', message: 'Shout message' },
    { time: '14:26:45', code: '0039', sender: 'User4', message: 'Whisper message' },
    { time: '14:27:20', code: '0018', sender: 'User5', message: 'FC message' },
  ];

  it('should filter log by single channel code', () => {
    const result = filterLog(mockLog, ['000A']);

    expect(result).toHaveLength(1);
    expect(result[0].code).toBe('000A');
  });

  it('should filter log by multiple channel codes', () => {
    const result = filterLog(mockLog, ['000A', '000E', '000B']);

    expect(result).toHaveLength(3);
    expect(result[0].code).toBe('000A');
    expect(result[1].code).toBe('000E');
    expect(result[2].code).toBe('000B');
  });

  it('should return empty array when no filters match', () => {
    const result = filterLog(mockLog, ['FFFF']);

    expect(result).toHaveLength(0);
  });

  it('should return empty array when filters are empty', () => {
    const result = filterLog(mockLog, []);

    expect(result).toHaveLength(0);
  });

  it('should return all entries if all codes are in filters', () => {
    const allCodes = mockLog.map(entry => entry.code);
    const result   = filterLog(mockLog, allCodes);

    expect(result).toHaveLength(mockLog.length);
  });

  it('should handle empty log array', () => {
    const result = filterLog([], ['000A']);

    expect(result).toHaveLength(0);
  });

  it('should not mutate original log array', () => {
    const originalLength = mockLog.length;
    filterLog(mockLog, ['000A']);

    expect(mockLog).toHaveLength(originalLength);
  });

  it('should preserve order of filtered entries', () => {
    const result = filterLog(mockLog, ['000E', '0018']);

    expect(result[0].code).toBe('000E');
    expect(result[1].code).toBe('0018');
    expect(result[0].sender).toBe('User2');
    expect(result[1].sender).toBe('User5');
  });
});
