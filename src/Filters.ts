import { CHANNELS } from './constants/Channels';
import { MatchedLogLine } from './Log';

export const setAllFilters = (): string[] => ['timestamp', ...CHANNELS.map((channel => channel.code))];

export const filterLog = (
  log: MatchedLogLine[],
  filters: string[],
): MatchedLogLine[] => log.filter(entry => filters.includes(entry.code));
