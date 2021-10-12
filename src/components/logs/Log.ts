export interface Log {
  filename: string;
  contents: MatchedLogLine[];
}

export interface MatchedLogLine {
  time: string;
  code: string;
  sender: string;
  message: string;
}
