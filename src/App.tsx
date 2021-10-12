import React from 'react';
import LogPanel from './components/logs/LogPanel';
import { css } from '@emotion/core';
import Header from './components/layout/Header';

const styles = {
  app: css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    background: linear-gradient(180deg, #021c2f, #2d2cf4);
    background-size: 400% 400%;

    -webkit-animation: gradient-background 10s ease infinite;
    -moz-animation: gradient-background 10s ease infinite;
    -o-animation: gradient-background 10s ease infinite;
    animation: gradient-background 10s ease infinite;
  `,
};

const App: React.FC = () => (
  <div css={styles.app}>
    <Header />
    <LogPanel />
  </div>
);

export default App;
