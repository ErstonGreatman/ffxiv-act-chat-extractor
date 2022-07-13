import * as React from 'react';
import { css } from '@emotion/react';
import {
  CHANNEL_CODES,
  CHANNELS,
} from '../constants/Channels';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { FLEX_ROW } from '../globalStyles/flexbox';
import { Switch } from '@mui/material';


const MotionDiv = motion.div;
const FULL_WIDTH = css`flex-basis: 100%;`;


const styles = {
  filters: [
    FLEX_ROW,
    css`
      flex-wrap: wrap;
      overflow: hidden;
      padding: 15px 15px 0;
    `,
  ],
  sectionTitle: css`
    margin: 20px 20px 20px 0;
    font-size: 1.2rem;
  `,
  filter: [
    FLEX_ROW,
    css`
      align-items: center;
      margin: 0.5rem 0;
      cursor: pointer;
      flex-basis: 200px;
    `,
  ],
  toggle: css`
    margin-right: 20px;
  `,
};


type Props = {
  filters: string[];
  showFilters: boolean;
  setFilters: (newFilters: string[]) => void;
};


/**
 * Filters: a component that shows the filtering options for the ACT log
 */
const Filters: React.FC<Props> = ({ filters, setFilters, showFilters }) => {
  const toggleFilter = (code: string) => setFilters(filters.includes(code)
                                                    ? filters.filter(filter => filter !== code)
                                                    : [...filters, code]);


  const renderFilters = (filters: string[]) => (
    CHANNELS.map((channel, index) => (
      <>
        {channel.code === CHANNEL_CODES.LINKSHELL1 && <span css={styles.sectionTitle}>Linkshells</span>}
        {channel.code === CHANNEL_CODES.CROSSWORLD_LINKSHELL1 && <span
          css={styles.sectionTitle}>Cross-World Linkshells</span>}
        <label css={[styles.filter, index === 0 && FULL_WIDTH]} htmlFor={channel.name} key={channel.name}>
          <Switch
            id={channel.name}
            css={styles.toggle}
            checked={filters.includes(channel.code)}
            onChange={() => toggleFilter(channel.code)}
            color='success'
          />
          <span>{channel.name}</span>
        </label>
      </>
    ))
  );


  return (
    <AnimatePresence>
      {showFilters && (
        <MotionDiv
          css={styles.filters}
          transition={{ duration: 0.5 }}
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
        >
          {renderFilters(filters)}
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default Filters;
