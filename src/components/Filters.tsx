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
import { Switch, Button } from '@mui/material';


const MotionDiv = motion.div;

const styles = {
  filters:         css`
    overflow: hidden;
    padding:  15px;
  `,
  controls:        css`
    display:       flex;
    gap:           10px;
    margin-bottom: 20px;
  `,
  groupsContainer: css`
    display:        flex;
    flex-direction: column;
    gap:            20px;
  `,
  group:           css`
    border:           1px solid #444444;
    border-radius:    8px;
    padding:          15px;
    background-color: rgba(0, 0, 0, 0.2);
  `,
  groupHeader:     css`
    display:         flex;
    justify-content: space-between;
    align-items:     center;
    margin-bottom:   10px;
  `,
  groupTitle:      css`
    font-size:   1.1rem;
    font-weight: 600;
    color:       #61dafb;
  `,
  groupToggle:     css`
    font-size: 0.85rem;
  `,
  filterGrid:      css`
    display:               grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap:                   8px;
  `,
  filter:          css`
    display:     flex;
    align-items: center;
    cursor:      pointer;
  `,
  toggle: css`
    margin-right: 8px;
  `,
};


type FilterGroup = {
  title: string;
  codes: string[];
};

const FILTER_GROUPS: FilterGroup[] = [
  {
    title: 'System',
    codes: ['timestamp', CHANNEL_CODES.EMOTE, CHANNEL_CODES.CUSTOM_EMOTE, CHANNEL_CODES.FREE_COMPANY],
  },
  {
    title: 'Chat Channels',
    codes: [
      CHANNEL_CODES.SAY,
      CHANNEL_CODES.SHOUT,
      CHANNEL_CODES.YELL,
      CHANNEL_CODES.PARTY,
      CHANNEL_CODES.ALLIANCE,
      CHANNEL_CODES.WHISPER,
      CHANNEL_CODES.ECHO,
    ],
  },
  {
    title: 'Linkshells',
    codes: [
      CHANNEL_CODES.LINKSHELL1,
      CHANNEL_CODES.LINKSHELL2,
      CHANNEL_CODES.LINKSHELL3,
      CHANNEL_CODES.LINKSHELL4,
      CHANNEL_CODES.LINKSHELL5,
      CHANNEL_CODES.LINKSHELL6,
      CHANNEL_CODES.LINKSHELL7,
      CHANNEL_CODES.LINKSHELL8,
    ],
  },
  {
    title: 'Cross-World Linkshells',
    codes: [
      CHANNEL_CODES.CROSSWORLD_LINKSHELL1,
      CHANNEL_CODES.CROSSWORLD_LINKSHELL2,
      CHANNEL_CODES.CROSSWORLD_LINKSHELL3,
      CHANNEL_CODES.CROSSWORLD_LINKSHELL4,
      CHANNEL_CODES.CROSSWORLD_LINKSHELL5,
      CHANNEL_CODES.CROSSWORLD_LINKSHELL6,
      CHANNEL_CODES.CROSSWORLD_LINKSHELL7,
      CHANNEL_CODES.CROSSWORLD_LINKSHELL8,
    ],
  },
];

/**
 * Filters: a component that shows the filtering options for the ACT log
 */
const Filters = ({
                   filters,
                   setFilters,
                   showFilters,
                 }: {
  filters: string[];
  showFilters: boolean;
  setFilters: (newFilters: string[]) => void;
}): React.ReactNode => {
  const toggleFilter = (code: string) => setFilters(filters.includes(code)
                                                    ? filters.filter(filter => filter !== code)
                                                    : [...filters, code]);

  const toggleAll = () => {
    const allCodes = Object.keys(CHANNELS);
    setFilters(allCodes);
  };

  const untoggleAll = () => {
    setFilters([]);
  };

  const toggleGroup = (groupCodes: string[]) => {
    const allGroupSelected = groupCodes.every(code => filters.includes(code));

    if (allGroupSelected) {
      // Remove all codes from this group
      setFilters(filters.filter(code => !groupCodes.includes(code)));
    } else {
      // Add all codes from this group
      const newFilters = [...new Set([...filters, ...groupCodes])];
      setFilters(newFilters);
    }
  };

  const isGroupFullySelected = (groupCodes: string[]) => {
    return groupCodes.every(code => filters.includes(code));
  };

  const renderGroup = (group: FilterGroup) => {
    const isFullySelected = isGroupFullySelected(group.codes);

    return (
      <div css={styles.group} key={group.title}>
        <div css={styles.groupHeader}>
          <span css={styles.groupTitle}>{group.title}</span>
          <Button
            css={styles.groupToggle}
            size="small"
            variant="text"
            onClick={() => toggleGroup(group.codes)}
          >
            {isFullySelected ? 'Deselect All' : 'Select All'}
          </Button>
        </div>
        <div css={styles.filterGrid}>
          {group.codes.map(code => {
            const channel = CHANNELS[code];
            if (!channel) {
              return null;
            }

            return (
              <label css={styles.filter} htmlFor={channel.name} key={code}>
                <Switch
                  id={channel.name}
                  css={styles.toggle}
                  checked={filters.includes(code)}
                  onChange={() => toggleFilter(code)}
                  color="success"
                  size="small"
                />
                <span>{channel.name}</span>
              </label>
            );
          })}
        </div>
      </div>
    );
  };

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
          <div css={styles.controls}>
            <Button variant="contained" size="small" onClick={toggleAll}>
              Select All
            </Button>
            <Button variant="outlined" size="small" onClick={untoggleAll}>
              Deselect All
            </Button>
          </div>
          <div css={styles.groupsContainer}>
            {FILTER_GROUPS.map(renderGroup)}
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default Filters;
