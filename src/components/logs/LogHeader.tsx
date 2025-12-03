import * as React from 'react';
import Filters from '../Filters';
import { css } from '@emotion/react';
import { Log } from './Log';
import { FLEX_COLUMN, FLEX_ROW } from '../../globalStyles/flexbox';


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
    `,
  ],
  fileName: css`
  `,
  toggleFilters: css`
    cursor: pointer;
  `,
  filterArrow: (showFilters: boolean) => css`
    display: inline-block;
    transform: rotate(${showFilters ? '180' : '0'}deg);
    transition: .5s ease-in-out;
  `,
  loadLogButton: css`
    border: .1rem solid #ffffff;
    background-color: teal;
    cursor: pointer;
    display: inline-block;
    text-shadow: none;
    padding: .3rem;
    box-shadow: -5px 5px 5px rgba(32, 32, 32, 1);
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
  return (
    <div css={styles.logLoadedHeader}>
      <div css={styles.actionBar}>
        <div css={styles.fileName}>
          {log.filename}&nbsp;
        </div>
        <div css={styles.toggleFilters} onClick={() => setShowFilters(!showFilters)}>
          <span>Filters </span><span css={styles.filterArrow(showFilters)}>▼</span>
        </div>
        <span css={styles.loadLogButton} onClick={openFileDialog}>Load new Log</span>
      </div>
      <Filters filters={filters} setFilters={setFilters} showFilters={showFilters} />
    </div>
  );
}

export default LogHeader;
