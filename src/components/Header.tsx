import * as React from 'react';
import { css } from '@emotion/core';
import GithubIcon from '../assets/github-icon.png';


const styles = {
  header: css`
    background-color: #282c34;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0 .5rem .25rem;
  `,
  link: css`
    color: #ffffff;
    text-decoration: none;
  `,
  github: css`
    display: flex;
    align-items: center;
  `,
  githubMessage: css`
    font-size: calc(2px + 1vmin);
    margin-right: 1rem;
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
    <a css={[styles.link, styles.github]} href='https://github.com/ErstonGreatman/ffxiv-act-chat-extractor'>
      <span css={styles.githubMessage}>See the project on Github!</span>
      <img alt='Github Logo' src={GithubIcon} />
    </a>
  </header>
);

export default Header;
