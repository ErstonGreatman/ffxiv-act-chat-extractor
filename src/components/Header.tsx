import * as React from 'react';
import { css } from '@emotion/core';


const styles = {
  header: css`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0 .5rem .25rem;
  `,
  link: css`
    color: #ffffff;
    text-decoration: none;
  `,
};


/**
 * Header: It's a header. Nothing special here!
 *
 * PureComponent: true
 * Redux Connected: false
 */
const Header: React.FC = () => (
  <header css={styles.header}>
    <a css={styles.link} href='/'>FFXIV ACT Chat Log Extractor</a>
  </header>
);

export default Header;
