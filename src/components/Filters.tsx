import * as React from 'react';
import { css } from '@emotion/core';
import { CHANNELS } from '../constants/Channels';


const styles = {
  filters: (showFilters: boolean) => css`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    margin-top: ${showFilters ? '1' : '0'}rem;
    max-height: ${showFilters ? '10' : '0'}rem;
    transform: scaleY(${showFilters ? '1' : '0'});
    transition: .5s ease-in-out;
  `,
  timeStamp: css`
    grid-column-end: span 8;
  `,
  filter: css`
  `,
  checkbox: css`
    box-shadow: -5px 5px 5px rgba(32, 32, 32, 1);
  `,
};


type Props = {
  filters: string[];
  showFilters: boolean;
  setFilters: (newFilters: string[]) => void;
};


/**
 * Filters: a component that shows the filtering options for the ACT log
 *
 * PureComponent: true
 * Redux Connected: false
 */
const Filters: React.FC<Props> = (props: Props) => {
  const toggleFilter = (code: string) => props.setFilters(props.filters.includes(code)
                                                          ? props.filters.filter(filter => filter !== code)
                                                          : [...props.filters, code]);
  const renderFilters = (filters: string[]) => (CHANNELS.map((channel, index) => (
    <label css={index === 0 ? styles.timeStamp : styles.filter} htmlFor={`#${channel.name}`} key={channel.name}>
      <input css={styles.checkbox} type='checkbox' id={channel.name} checked={filters.includes(channel.code)}
             onChange={() => toggleFilter(channel.code)} />
      <span>{channel.name}</span>
    </label>
  )));

  return (
    <div css={styles.filters(props.showFilters)}>
      {renderFilters(props.filters)}
    </div>
  );
};

export default Filters;
