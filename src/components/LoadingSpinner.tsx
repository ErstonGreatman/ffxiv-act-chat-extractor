import * as React from 'react';
import Crystal from '../assets/ff4-spinning-crystal.gif';
import { css } from '@emotion/react';
import {
  FLEX_CENTERED,
  FLEX_COLUMN,
} from '../globalStyles/flexbox';


const styles = {
  loadingSpinner: [
    FLEX_COLUMN,
    FLEX_CENTERED,
    css`
      height: 100%;
      flex-grow: 1;
    `,
  ],
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


/**
 * LoadingSpinner: a component that shows a spinning crystal and, optionally, a message
 */
const LoadingSpinner = ({ message }: { message: string }): React.ReactNode => (
  <div css={styles.loadingSpinner}>
    {message && <div css={styles.message}>{message}</div>}
    <img css={styles.spinner} alt='Loading Spinner' src={Crystal} />
  </div>
);

export default LoadingSpinner;
