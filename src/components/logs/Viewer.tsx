import * as React from 'react';
import { MatchedLogLine } from './Log';
import { css } from '@emotion/react';
import { CHANNEL_CODES, CHANNELS } from '../../constants/Channels';
import { parseName } from './module';
import { RegEx } from '../../constants/RegEx';


const styles = {
  logs:        css`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    overflow: auto;
  `,
  logContents: css`
  `,
  logEntry: (code: string) => css`
    color: ${CHANNELS.find(channel => channel.code === code)?.color ?? '#FFFFFF'};
    font-family: 'Open Sans', Arial, sans-serif;
  `,
};


type Props = {
  log: MatchedLogLine[];
  showTimeStamp: boolean;
};


/**
 * Viewer: a component that displays the parsed log based on filtering
 */
const Viewer: React.FC<Props> = (props: Props) => {
  const renderSender = (code: string, sender: string) => {
    const parsedSender = parseName(sender);

    switch (code) {
      case CHANNEL_CODES.CUSTOM_EMOTE:
        return <span>{parsedSender} </span>;
      case CHANNEL_CODES.EMOTE:
        return <></>;
      case CHANNEL_CODES.WHISPER:
        return <span>{parsedSender}&gt; </span>;
      case CHANNEL_CODES.PARTY:
        return <span>({parsedSender}) </span>;
      case CHANNEL_CODES.FREE_COMPANY:
        return <span>[Free Company]{`<${parsedSender}>`} </span>;
      case CHANNEL_CODES.LINKSHELL1:
      case CHANNEL_CODES.LINKSHELL2:
      case CHANNEL_CODES.LINKSHELL3:
      case CHANNEL_CODES.LINKSHELL4:
      case CHANNEL_CODES.LINKSHELL5:
      case CHANNEL_CODES.LINKSHELL6:
      case CHANNEL_CODES.LINKSHELL7:
      case CHANNEL_CODES.LINKSHELL8:
        const linkshell = parseInt(code) - 9;
        return <span>[{linkshell}]{`<${parsedSender}>`} </span>;
      case CHANNEL_CODES.CROSSWORLD_LINKSHELL1:
      case CHANNEL_CODES.CROSSWORLD_LINKSHELL2:
      case CHANNEL_CODES.CROSSWORLD_LINKSHELL3:
      case CHANNEL_CODES.CROSSWORLD_LINKSHELL4:
      case CHANNEL_CODES.CROSSWORLD_LINKSHELL5:
        const cwls = parseInt(code) - 63;
        return <span>[CWL{cwls}]{`<${parsedSender}>`} </span>;
      default:
        return <span>{parsedSender}: </span>;
    }
  };

  // Emotes are a special case and need to be name-checked
  const renderEmote = (message: string) => message.replace(
    new RegExp(RegEx.name, 'g'),
    (match) => parseName(match),
  );

  const renderLogEntry = (entry: MatchedLogLine, index: number) => (
    <div css={styles.logEntry(entry.code)} key={`${entry.time}-${entry.sender}-${index}`}>
      {props.showTimeStamp && <span>[{entry.time}] </span>}
      {renderSender(entry.code, entry.sender)}
      <span>{entry.code === CHANNEL_CODES.EMOTE ? renderEmote(entry.message) : entry.message}</span>
    </div>
  );

  return (
    <div css={styles.logs}>
      <div css={styles.logContents}>
        {props.log.map(renderLogEntry)}
      </div>
    </div>
  );
};

export default Viewer;
