import * as React from 'react';
import Filters from './Filters';
import { css } from '@emotion/core';
import { Log } from '../Log';
import { useState } from 'react';


const styles = {
  logLoadedHeader: css`
    border-bottom: #eeeeee solid;
    color: #ffffff;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: stretch;
    flex-grow: 1;
    text-shadow: -5px 5px 5px rgba(32, 32, 32, 1);
    padding: 1rem;
    background: linear-gradient(180deg, #021c2f, #2d2cf4);
    background-size: 200% 200%;
  `,
  actionBar: css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  `,
  fileName: css`
    
  `,
  toggleFilters: css`
    cursor: pointer;
  `,
  filterArrow: (showFilters: boolean) => css`
    display: inline-block;
    transform: rotate(${ showFilters ? '180' : '0'}deg);
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


type Props = {
  log: Log;
  filters: string[];
  setFilters: (newFilters: string[]) => void;
  openFileDialog: () => void;
};


/**
 * LogHeader: a component that shows the filename of the log loaded, filters, and a button to load a new log file
 *
 * PureComponent: true
 * Redux Connected: false
 */
const LogHeader: React.FC<Props> = (props: Props) => {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div css={styles.logLoadedHeader}>
      <div css={styles.actionBar}>
        <div css={styles.fileName}>
          {props.log.filename}&nbsp;
        </div>
        <div css={styles.toggleFilters} onClick={() => setShowFilters(!showFilters)}>
          <span>Filters </span><span css={styles.filterArrow(showFilters)}>▼</span>
        </div>
        <span css={styles.loadLogButton} onClick={props.openFileDialog}>Load new Log</span>
      </div>
      <Filters filters={props.filters} setFilters={props.setFilters} showFilters={showFilters} />
    </div>
  );
}

export default LogHeader;
