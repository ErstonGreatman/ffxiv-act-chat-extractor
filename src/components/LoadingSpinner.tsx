import * as React from 'react';
import Crystal from '../assets/ff4-spinning-crystal.gif';
import { css } from '@emotion/core';


const styles = {
  loadingSpinner: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-grow: 1;
  `,
  message: css`
    font-size: 3rem;
    font-weight: 500;
    user-select: none;
    color: #ffffff;
    text-shadow: -5px 5px 5px rgba(32, 32, 32, 1);
  `,
  spinner: css`
    display: block;
    margin-top: 5rem;
    transform: scale(2, 2);
    user-select: none;
  `,
};


type Props = {
  message: string;
};


/**
 * LoadingSpinner: a component that shows a spinning crystal and, optionally, a message
 *
 * PureComponent: true
 * Redux Connected: false
 */
const LoadingSpinner: React.FC<Props> = (props: Props) => (
  <div css={styles.loadingSpinner}>
    {props.message && <div css={styles.message}>{props.message}</div>}
    <img css={styles.spinner} alt='Loading Spinner' src={Crystal} />
  </div>
);

export default LoadingSpinner;
