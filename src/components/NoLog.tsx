import * as React from 'react';
import { css } from '@emotion/react';


const styles = {
  noLog: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    overflow: hidden;
    user-select: none;
    transition: 1s ease-in-out;
  `,
  dragInstructions: css`
    font-size: 3rem;
    font-weight: 500;
    user-select: none;
  `,
  onDragActive: (isDragActive: boolean) => css`
    visibility: ${isDragActive ? 'inherit' : 'hidden'};
  `,
};


type Props = {
  hasLog: boolean;
  isDragActive: boolean;
};


/**
 * NoLog: a component that shows when there are no logs loaded
 *
 * PureComponent: true
 * Redux Connected: false
 */
const NoLog: React.FC<Props> = (props: Props) => (
  <div css={styles.noLog}>
    <p css={styles.dragInstructions}>Drag and Drop your .log file here</p>
    <div css={styles.onDragActive(props.isDragActive)}>Gimme gimme log file!</div>
  </div>
);

export default NoLog;
