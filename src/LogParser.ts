import { MatchedLogLine } from './Log';

export const parseLog = (onComplete: (parsedLog: MatchedLogLine[]) => void) => (files: File[]): void => {
  if (files.length === 0) {
    return;
  }

  const reader = new FileReader();

  reader.onabort = () => console.log('file reading was aborted');
  reader.onerror = () => console.log('file reading has failed');
  reader.onload = () => {
    // Do whatever you want with the file contents
    const log = reader.result;

    if (log) {
      const logByLine: string[] = log.toString().split('\n');
      const regex = /00\|\d+-\d+-\d+T(?<time>\d+:\d+:\d+).+?\|(?<code>.+)\|.*?(?<sender>[A-Z][A-z']+? [A-z']+).*?\|(?<message>.+)\|[^]+/;
      const parsedLog = logByLine.map((line: string) => {
        const match = line.match(regex);
        if (match && match.groups) {
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
      // console.table(parsedLog);
      onComplete(parsedLog);
    }
  };

  reader.readAsText(files[0]);
};
