import { MatchedLogLine } from './Log';
import { RegEx } from '../../constants/RegEx';
import { CHANNEL_CODES, CHANNELS } from '../../constants/Channels';


export const setAllFilters = (): string[] => Object.keys(CHANNELS);

export const filterLog = (
  log: MatchedLogLine[],
  filters: string[],
): MatchedLogLine[] => log.filter(entry => filters.includes(entry.code));


// noinspection JSCommentMatchesSignature
/**
 * parseLog
 * This function wraps a child function that takes an array of files and parses the first file (multiple in the future)
 * into a MatchedLogLine array. That array is then passed to the onComplete callback param of the parent function
 * @param {(parsedLog: MatchedLogLine[] => void)} onComplete - Callback function that receives the results of the log parsing
 * @param {File[]} files - Provided by whatever calls this function. Array of Files, probably from a file dialog
 */
export const parseLog = (onComplete: (parsedLog: MatchedLogLine[]) => void) => (files: File[]): void => {
  if (files.length === 0) {
    return;
  }

  const reader = new FileReader();

  reader.onabort = () => console.log('file reading was aborted');
  reader.onerror = () => console.log('file reading has failed');
  reader.onload = () => {
    // Do whatever you want with the file contents
    const log = reader.result?.toString();

    if (log) {
      onComplete(parseLogLines(log));
    }
  };

  reader.readAsText(files[0]);
};

/**
 * parseShoutSender
 * Parses Shout message sender information which may include job abbreviation
 * Format: "JOB Name Server" or "Name Server" (job is optional)
 * @param {string} sender - Sender string from the log
 * @return {object} Object with job (optional), name, and realm (optional)
 */
export const parseShoutSender = (sender: string): { job?: string; name: string; realm?: string } => {
  const match = sender.match(RegEx.shoutSender);

  if (!match?.groups) {
    return { name: 'Unknown' };
  }

  const groups = match.groups;

  // Check for job with name and realm
  if (groups['job'] && groups['name'] && groups['realm']) {
    return {
      job:   groups['job'],
      name:  groups['name'],
      realm: groups['realm'],
    };
  }

  // Check for job with name only (no realm)
  if (groups['job2'] && groups['name2']) {
    return {
      job:  groups['job2'],
      name: groups['name2'],
    };
  }

  // Check for name with realm (no job)
  if (groups['nameOnly'] && groups['realmOnly']) {
    return {
      name:  groups['nameOnly'],
      realm: groups['realmOnly'],
    };
  }

  // Check for name only (no job, no realm)
  if (groups['nameOnlyNoRealm']) {
    return {
      name: groups['nameOnlyNoRealm'],
    };
  }

  return { name: 'Unknown' };
};

/**
 * parseName
 * Parses and presents a display-friendly string for names as Cross-World names enter the log as
 * 'Erston GreatmanBrynhildr'
 * @param {string} name - Name of the character parse from the log string.
 * @return {string} A chat name string such as 'Erston Greatman' or 'Erston Greatman🌸Brynhildr
 */
export const parseName = (name: string): string => {
  const senderRegEx = name.match(RegEx.name);
  return `${senderRegEx?.groups?.['name'] ?? 'Unknown'}${senderRegEx?.groups?.['realm']
    ? `🌸${senderRegEx.groups['realm']}`
    : ''}`;
};

/**
 * parseLogLines
 * Takes a log in string form and parses it into an array of lines, broken down into objects by time, channel code,
 * sender and message. Note: Channel code is made uppercase to avoid casing comparison issues
 * @param {string} log - Name of the character parse from the log string
 * @return {MatchedLogLine[]} An array of MatchedLogLine objects
 */
export const parseLogLines = (log: string): MatchedLogLine[] => {
  const logByLine: string[] = log.toString().split('\n');

  const parsedLog = logByLine.map(
    (line: string) => {
      const match = line.match(RegEx.message);

      if (match?.groups) {
        const code = match.groups['code'].toUpperCase();
        let sender = match.groups['sender'].trim();

        // Parse sender for SHOUT messages to format with job, name, and realm
        if (code === CHANNEL_CODES.SHOUT) {
          const shoutInfo = parseShoutSender(sender);
          sender          = `${shoutInfo.job ? `[${shoutInfo.job}] ` : ''}${shoutInfo.name}${shoutInfo.realm
            ? `🌸${shoutInfo.realm}`
            : ''}`;
        }

        return {
          time:    match.groups['time'],
          code:   code,
          sender: sender,
          message: match.groups['message'],
        };
      }
      return null;
    },
  ).filter(element => element !== null) as MatchedLogLine[];

  if (import.meta.env.DEV) {
    const logOutput = parsedLog.map(entry => `${entry.time}|${entry.code}|${entry.sender}|${entry.message}
`);
    console.log(`Parsed log:
${logOutput}`);
  }

  return parsedLog;
};
