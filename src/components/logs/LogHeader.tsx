import * as React from 'react';
import Filters from '../Filters';
import { css } from '@emotion/react';
import { Log } from './Log';
import { FLEX_COLUMN, FLEX_ROW } from '../../globalStyles/flexbox';
import { CHANNELS } from '../../constants/Channels';


const styles = {
  logLoadedHeader: [
    FLEX_COLUMN,
    css`
      border-bottom: #eeeeee solid;
      color: #ffffff;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: stretch;
      flex-grow: 1;
      text-shadow: -5px 5px 5px rgba(32, 32, 32, 1);
      padding: 1rem;
      background: linear-gradient(180deg, #2d2cf4, #021c2f);
      background-size: 200% 100%;
    `,
  ],
  actionBar: [
    FLEX_ROW,
    css`
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;
    `,
  ],
  fileName: css`
    flex: 1;
    min-width: 260px;
  `,
  actions: css`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-left: auto;
  `,
  toggleFilters: css`
    cursor: pointer;
    border: 0.1rem solid #80c0f1;
    padding: 0.3rem 0.7rem;
    border-radius: 6px;
    user-select: none;
    background: linear-gradient(180deg, #3c6fba, #214787);
    color: #ffffff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18), -4px 4px 6px rgba(15, 20, 43, 0.55);
  `,
  filterArrow: (showFilters: boolean) => css`
    display: inline-block;
    transform: rotate(${showFilters ? '180' : '0'}deg);
    transition: .5s ease-in-out;
  `,
  loadLogButton: css`
    border: .1rem solid #80c0f1;
    background: linear-gradient(180deg, #27659a, #0f476b);
    cursor: pointer;
    display: inline-block;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.55);
    padding: .3rem .7rem;
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14), -4px 4px 6px rgba(15, 20, 43, 0.55);
  `,
};


/**
 * LogHeader: a component that shows the filename of the log loaded, filters, and a button to load a new log file
 */
const LogHeader = ({
                     log,
                     filters,
                     setFilters,
                     openFileDialog,
                   }: {
  log: Log;
  filters: string[];
  setFilters: (newFilters: string[]) => void;
  openFileDialog: () => void;
}): React.ReactNode => {
  const [showFilters, setShowFilters] = React.useState(false);
  const totalFilters = Object.keys(CHANNELS).length;

  return (
    <div css={styles.logLoadedHeader}>
      <div css={styles.actionBar}>
        <div css={styles.fileName}>
          {log.filename}&nbsp;
        </div>
        <div css={styles.actions}>
          <div css={styles.toggleFilters} onClick={() => setShowFilters(!showFilters)}>
            <span>Open Filters ({filters.length}/{totalFilters}) </span><span css={styles.filterArrow(showFilters)}>▼</span>
          </div>
          <span css={styles.loadLogButton} onClick={openFileDialog}>Load New Log</span>
        </div>
      </div>
      <Filters filters={filters} setFilters={setFilters} showFilters={showFilters} onClose={() => setShowFilters(false)} />
    </div>
  );
}

export default LogHeader;
