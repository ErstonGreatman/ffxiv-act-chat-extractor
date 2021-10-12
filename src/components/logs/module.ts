import { MatchedLogLine } from './Log';
import { RegEx } from '../../constants/RegEx';
import { CHANNELS } from '../../constants/Channels';

export const setAllFilters = (): string[] => ['timestamp', ...CHANNELS.map((channel => channel.code))];

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
 * parseName
 * Parses and presents a display-friendly string for names as Cross-World names enter the log as
 * 'Erston GreatmanBrynhildr'
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
 * sender and message
 * @param {string} log - Name of the character parse from the log string
 * @return {MatchedLogLine[]} An array of MatchedLogLine objects
 */
export const parseLogLines = (log: string): MatchedLogLine[] => {
  const logByLine: string[] = log.toString().split('\n');

  return logByLine.map((line: string) => {
    const match = line.match(RegEx.message);

    if (match?.groups) {
      return {
        time: match.groups['time'],
        code: match.groups['code'],
        sender: match.groups['sender'],
        message: match.groups['message'],
      };
    }
    return null;
  })
    .filter(element => element !== null) as MatchedLogLine[];
};
