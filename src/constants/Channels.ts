export enum CHANNEL_CODES {
  SAY = '000a',
  SHOUT = '000b',
  PARTY = '000e',
  ALLIANCE = '000f',
  LINKSHELL1 = '0010',
  LINKSHELL2 = '0011',
  LINKSHELL3 = '0012',
  LINKSHELL4 = '0013',
  LINKSHELL5 = '0014',
  LINKSHELL6 = '0015',
  LINKSHELL7 = '0016',
  LINKSHELL8 = '0017',
  FREE_COMPANY = '0018',
  EMOTE = '001d',
  YELL = '001e',
  WHISPER = '0039'
};

export const CHANNELS = [
  // Technically not a channel, but used for optional filtering
  { code: 'time', name: 'Show Timestamp' },
  { code: '000a', name: 'Say', color: '#ffffff' },
  { code: '000b', name: 'Shout', color: '#eb9234' },
  { code: '000e', name: 'Party', color: '#1ecce3' },
  { code: '000f', name: 'Alliance', color: '#eb9234' },
  { code: '0018', name: 'Free Company', color: '#54b068' },
  { code: '001d', name: 'Emote', color: '#ffffff' },
  { code: '001e', name: 'Yell', color: '#c9c722' },
  { code: '0039', name: 'Whisper', color: '#d439cc' },
  { code: '0010', name: 'Linkshell 1', color: '#31b56a' },
  { code: '0011', name: 'Linkshell 2', color: '#2a8c9c' },
  { code: '0012', name: 'Linkshell 3', color: '#296196' },
  { code: '0013', name: 'Linkshell 4', color: '#2d509c' },
  { code: '0014', name: 'Linkshell 5', color: '#5959b1' },
  { code: '0015', name: 'Linkshell 6', color: '#7159b1' },
  { code: '0016', name: 'Linkshell 7', color: '#7b51af' },
  { code: '0017', name: 'Linkshell 8', color: '#9551af' },
];

