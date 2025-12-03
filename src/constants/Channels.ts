export enum CHANNEL_CODES {
  SAY                   = '000A',
  SHOUT                 = '000B',
  PARTY                 = '000E',
  ALLIANCE              = '000F',
  LINKSHELL1            = '0010',
  LINKSHELL2            = '0011',
  LINKSHELL3            = '0012',
  LINKSHELL4            = '0013',
  LINKSHELL5            = '0014',
  LINKSHELL6            = '0015',
  LINKSHELL7            = '0016',
  LINKSHELL8            = '0017',
  FREE_COMPANY          = '0018',
  CUSTOM_EMOTE          = '001C',
  EMOTE                 = '001D',
  YELL                  = '001E',
  WHISPER               = '000C',
  ECHO                  = '0039',
  CROSSWORLD_LINKSHELL1 = '0064',
  CROSSWORLD_LINKSHELL2 = '0065',
  CROSSWORLD_LINKSHELL3 = '0066',
  CROSSWORLD_LINKSHELL4 = '0067',
  CROSSWORLD_LINKSHELL5 = '0068',
  CROSSWORLD_LINKSHELL6 = '0069',
  CROSSWORLD_LINKSHELL7 = '0070',
  CROSSWORLD_LINKSHELL8 = '0071',
}


export type ChannelInfo = {
  name: string;
  color?: string;
};

export const CHANNELS: Record<string, ChannelInfo> = {
  // Technically not a channel, but used for optional filtering
  'timestamp':                           { name: 'Show Timestamp' },
  [CHANNEL_CODES.SAY]:                   { name: 'Say', color: '#FFFFFF' },
  [CHANNEL_CODES.SHOUT]:                 { name: 'Shout', color: '#EB9234' },
  [CHANNEL_CODES.PARTY]:                 { name: 'Party', color: '#1ECCE3' },
  [CHANNEL_CODES.ALLIANCE]:              { name: 'Alliance', color: '#EB9234' },
  [CHANNEL_CODES.FREE_COMPANY]:          { name: 'Free Company', color: '#54B068' },
  [CHANNEL_CODES.CUSTOM_EMOTE]:          { name: 'Custom Emote', color: '#8CCCC3' },
  [CHANNEL_CODES.EMOTE]:                 { name: 'Emote', color: '#FFFFFF' },
  [CHANNEL_CODES.YELL]:                  { name: 'Yell', color: '#C9C722' },
  [CHANNEL_CODES.WHISPER]:               { name: 'Whisper', color: '#D439CC' },
  [CHANNEL_CODES.ECHO]:                  { name: 'Echo', color: '#FFFFFF' },
  [CHANNEL_CODES.LINKSHELL1]:            { name: 'Linkshell 1', color: '#31B56A' },
  [CHANNEL_CODES.LINKSHELL2]:            { name: 'Linkshell 2', color: '#2A8C9C' },
  [CHANNEL_CODES.LINKSHELL3]:            { name: 'Linkshell 3', color: '#296196' },
  [CHANNEL_CODES.LINKSHELL4]:            { name: 'Linkshell 4', color: '#2D509C' },
  [CHANNEL_CODES.LINKSHELL5]:            { name: 'Linkshell 5', color: '#5959B1' },
  [CHANNEL_CODES.LINKSHELL6]:            { name: 'Linkshell 6', color: '#7159B1' },
  [CHANNEL_CODES.LINKSHELL7]:            { name: 'Linkshell 7', color: '#7B51AF' },
  [CHANNEL_CODES.LINKSHELL8]:            { name: 'Linkshell 8', color: '#9551AF' },
  [CHANNEL_CODES.CROSSWORLD_LINKSHELL1]: { name: 'Cross-World Linkshell 1', color: '#2D509C' },
  [CHANNEL_CODES.CROSSWORLD_LINKSHELL2]: { name: 'Cross-World Linkshell 2', color: '#5959B1' },
  [CHANNEL_CODES.CROSSWORLD_LINKSHELL3]: { name: 'Cross-World Linkshell 3', color: '#7159B1' },
  [CHANNEL_CODES.CROSSWORLD_LINKSHELL4]: { name: 'Cross-World Linkshell 4', color: '#7B51AF' },
  [CHANNEL_CODES.CROSSWORLD_LINKSHELL5]: { name: 'Cross-World Linkshell 5', color: '#9551AF' },
  [CHANNEL_CODES.CROSSWORLD_LINKSHELL6]: { name: 'Cross-World Linkshell 6', color: '#AD51AF' },
  [CHANNEL_CODES.CROSSWORLD_LINKSHELL7]: { name: 'Cross-World Linkshell 7', color: '#C551AF' },
  [CHANNEL_CODES.CROSSWORLD_LINKSHELL8]: { name: 'Cross-World Linkshell 8', color: '#DD51AF' },
};

