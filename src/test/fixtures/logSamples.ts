/**
 * Sample FFXIV ACT log lines for testing
 * Based on real ACT log format
 */

// Valid log lines
export const VALID_SAY_LOG     = '00|2024-01-15T14:23:45.1234567-08:00|000A|Erston Greatman|Hello world!|abc123def456';
export const VALID_PARTY_LOG   = '00|2024-01-15T14:24:12.7654321-08:00|000E|Test User|Let\'s go!|xyz789abc123';
export const VALID_SHOUT_LOG = '00|2024-01-15T14:25:30.9876543-08:00|000B|Slagator Menio| that beat is soo good|def456ghi789';
export const VALID_WHISPER_LOG = '00|2024-01-15T14:26:45.1111111-08:00|0039|Private Sender|Secret message|ghi789jkl012';
export const VALID_FC_LOG      = '00|2024-01-15T14:27:20.2222222-08:00|0018|Guild Member|FC meeting tonight!|jkl012mno345';
export const VALID_EMOTE_LOG   = '00|2024-01-15T14:28:05.3333333-08:00|001D|Happy Person|waves to everyone.|mno345pqr678';

// SHOUT messages with various sender formats
export const VALID_SHOUT_SIMPLE      = '00|2024-01-15T14:25:30.9876543-08:00|000B|Slagator Menio| that beat is soo good|def456ghi789';
export const VALID_SHOUT_WITH_REALM  = '00|2024-01-15T14:25:35.1234567-08:00|000B|John SmithExcalibur| Anyone looking for a group?|def456ghi790';
export const VALID_SHOUT_WITH_JOB    = '00|2024-01-15T14:25:40.2345678-08:00|000B|DRG Brave Knight| LFG for dungeons!|def456ghi791';
export const VALID_SHOUT_FULL_FORMAT = '00|2024-01-15T14:25:45.3456789-08:00|000B|PLD Strong Protector Gilgamesh| Come join our FC!|def456ghi792';

// Cross-world player (realm suffix attached to name)
export const CROSSWORLD_PLAYER_LOG  = '00|2024-01-15T14:29:10.4444444-08:00|000A|Erston GreatmanBrynhildr|Hello from another server!|pqr678stu901';
export const CROSSWORLD_PLAYER_LOG2 = '00|2024-01-15T14:30:00.5555555-08:00|000E|Jane DoeMalboro|Party time!|stu901vwx234';

// Edge cases
export const LOG_WITH_APOSTROPHE    = '00|2024-01-15T14:31:15.6666666-08:00|000A|Y\'shtola Rhul|This is my message.|vwx234yz0567';
export const LOG_WITH_SPECIAL_CHARS = '00|2024-01-15T14:32:30.7777777-08:00|000E|John Smith|Message with !@#$% special chars|yz0567abc890';
export const LOG_WITH_EMOTE_SYNTAX  = '00|2024-01-15T14:33:45.8888888-08:00|001C|Cool Player|<se.1>|abc890def123';

// Invalid/malformed logs
export const INVALID_NO_PIPE        = '00 2024-01-15T14:34:00.9999999-08:00 000A Bad Format Invalid message';
export const INVALID_WRONG_PREFIX   = '01|2024-01-15T14:35:00.0000000-08:00|000A|Wrong Type|Should not match|def123ghi456';
export const INVALID_MISSING_FIELDS = '00|2024-01-15T14:36:00.1111111-08:00|000A||';
export const EMPTY_LINE             = '';
export const WHITESPACE_LINE        = '   ';

// Multi-line log (simulating a complete log file)
export const MULTI_LINE_LOG = `00|2024-01-15T14:23:45.1234567-08:00|000A|Erston Greatman|Hello world!|abc123def456
00|2024-01-15T14:24:12.7654321-08:00|000E|Test User|Let\'s go!|xyz789abc123
${INVALID_NO_PIPE}
${EMPTY_LINE}
00|2024-01-15T14:25:30.9876543-08:00|000B|Slagator Menio| that beat is soo good|def456ghi789
00|2024-01-15T14:29:10.4444444-08:00|000A|Erston GreatmanBrynhildr|Hello from another server!|pqr678stu901`;

// Expected parsed results
export const EXPECTED_SAY_PARSED = {
  time:    '14:23:45',
  code:    '000A',
  sender:  'Erston Greatman',
  message: 'Hello world!',
};

export const EXPECTED_PARTY_PARSED = {
  time:    '14:24:12',
  code:    '000E',
  sender:  'Test User',
  message: 'Let\'s go!',
};

export const EXPECTED_CROSSWORLD_PARSED = {
  time:    '14:29:10',
  code:    '000A',
  sender:  'Erston GreatmanBrynhildr',
  message: 'Hello from another server!',
};

export const EXPECTED_SHOUT_SIMPLE_PARSED = {
  time:    '14:25:30',
  code:    '000B',
  sender:  'Slagator Menio',
  message: ' that beat is soo good',
};

// SHOUT parsing test cases (sender is formatted during parseLogLines)
export const SHOUT_SENDER_TESTS = [
  {
    input:       'Slagator Menio',
    expected:    'Slagator Menio',
    description: 'Simple name without job or realm',
  },
  {
    input:       'John SmithExcalibur',
    expected:    'John Smith🌸Excalibur',
    description: 'Name with realm',
  },
  {
    input:       'DRG Brave Knight',
    expected:    '[DRG] Brave Knight',
    description: 'Name with job abbreviation',
  },
  {
    input:       'PLD Strong Protector Gilgamesh',
    expected:    '[PLD] Strong Protector🌸Gilgamesh',
    description: 'Full format: job, name, and realm',
  },
];

// Name parsing test cases
export const NAME_TESTS = [
  { input: 'Erston Greatman', expected: 'Erston Greatman' },
  { input: 'Erston GreatmanBrynhildr', expected: 'Erston Greatman🌸Brynhildr' },
  { input: 'Y\'shtola Rhul', expected: 'Y\'shtola Rhul' },
  { input: 'Y\'shtola RhulExcalibur', expected: 'Y\'shtola Rhul🌸Excalibur' },
  { input: 'Jane DoeMalboro', expected: 'Jane Doe🌸Malboro' },
  { input: 'InvalidName', expected: 'Unknown' },
  { input: '', expected: 'Unknown' },
];
