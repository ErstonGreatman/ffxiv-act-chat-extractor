import * as React from 'react';
import {css} from '@emotion/react';
import {
    CHANNEL_CODES,
    CHANNELS,
} from '../constants/Channels';
import {Switch, Button, Drawer} from '@mui/material';

const styles = {
    drawerPaper: css`
        width: min(92vw, 780px);
        background: linear-gradient(180deg, #1e2e7d 0%, #0d2457 40%, #061832 100%);
        color: #ffffff;
        border-left: 2px solid #5fa9e8;
        box-shadow: inset 0 0 0 1px rgba(125, 185, 236, 0.55), inset 0 0 20px rgba(140, 190, 255, 0.2),
        -14px 0 24px rgba(0, 0, 0, 0.5);
    `,
    filtersPanel: css`
        height: 100%;
        display: flex;
        flex-direction: column;
        background-image: radial-gradient(circle at top right, rgba(112, 158, 255, 0.18), transparent 45%);
    `,
    panelHeader: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 16px 18px 12px 18px;
        border-bottom: 1px solid rgba(112, 173, 233, 0.45);
        box-shadow: inset 0 -1px 0 rgba(89, 132, 208, 0.5);
    `,
    panelTitle: css`
        font-size: 1.15rem;
        font-weight: 700;
        color: #81e8ff;
    `,
    panelSubtitle: css`
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.9);
        margin-top: 2px;
    `,
    controls: css`
        display: flex;
        gap: 10px;
        padding: 14px 18px;
        border-bottom: 1px solid rgba(112, 173, 233, 0.35);
        background: linear-gradient(180deg, rgba(13, 38, 86, 0.65), rgba(8, 27, 63, 0.35));
    `,
    groupsContainer: css`
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 14px 18px 18px 18px;
        overflow-y: auto;
        overflow-x: hidden;
    `,
    group: css`
        border: 1px solid rgba(112, 173, 233, 0.38);
        border-radius: 8px;
        padding: 14px;
        background: linear-gradient(180deg, rgba(13, 39, 96, 0.56), rgba(5, 18, 40, 0.6));
        box-shadow: inset 0 0 0 1px rgba(119, 168, 247, 0.2);
    `,
    groupHeader: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    `,
    groupTitle: css`
        font-size: 1rem;
        font-weight: 600;
        color: #81e8ff;
    `,
    groupToggle: css`
        font-size: 0.85rem;
        color: #9ad8ff;
    `,
    filterGrid: css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 8px;
        @media (max-width: 700px) {
            grid-template-columns: 1fr;
        }
    `,
    filter: css`
        display: flex;
        align-items: flex-start;
        gap: 6px;
        cursor: pointer;
        padding-right: 6px;
    `,
    toggle: css`
        margin-top: -2px;
    `,
    filterLabel: (color?: string) => css`
        color: ${color || '#ffffff'};
        white-space: normal;
        line-height: 1.2;
    `,
    menuButtonPrimary: css`
        border: 1px solid #7ebeee;
        color: #ffffff;
        background: linear-gradient(180deg, #3f73be, #274f96);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6);
    `,
    menuButtonSecondary: css`
        border: 1px solid #6ea9d8;
        color: #d7edff;
        background: rgba(8, 24, 57, 0.45);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
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
                     onClose,
                 }: {
    filters: string[];
    showFilters: boolean;
    onClose: () => void;
    setFilters: (newFilters: string[]) => void;
}): React.ReactNode => {
    const paperProps = {
        css: styles.drawerPaper,
        sx: {
            backgroundColor: '#08152d',
            backgroundImage: 'linear-gradient(180deg, #1e2e7d 0%, #0d2457 40%, #061832 100%)',
        },
    };
    const totalFilterCount = Object.keys(CHANNELS).length;
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
                            <label css={styles.filter} htmlFor={code} key={code}>
                                <Switch
                                    id={code}
                                    css={styles.toggle}
                                    checked={filters.includes(code)}
                                    onChange={() => toggleFilter(code)}
                                    color="success"
                                    size="small"
                                />
                                <span css={styles.filterLabel(channel.color)}>{channel.name}</span>
                            </label>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <Drawer
            anchor="right"
            open={showFilters}
            onClose={onClose}
            slotProps={{
                backdrop: {sx: {backgroundColor: 'transparent'}},
                paper: paperProps
            }}
        >
            <div css={styles.filtersPanel}>
                <div css={styles.panelHeader}>
                    <div>
                        <div css={styles.panelTitle}>Filters</div>
                        <div css={styles.panelSubtitle}>{filters.length} of {totalFilterCount} enabled</div>
                    </div>
                    <Button css={styles.menuButtonSecondary} size="small" onClick={onClose}>Close</Button>
                </div>
                <div css={styles.controls}>
                    <Button css={styles.menuButtonPrimary} size="small" onClick={toggleAll}>
                        Select All
                    </Button>
                    <Button css={styles.menuButtonSecondary} size="small" onClick={untoggleAll}>
                        Deselect All
                    </Button>
                </div>
                <div css={styles.groupsContainer}>
                    {FILTER_GROUPS.map(renderGroup)}
                </div>
            </div>
        </Drawer>
    );
};

export default Filters;
