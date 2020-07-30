import React from 'react';
import logo from './logo.svg';
import styles from './styles';

const App: React.FC = () => {
  return (
    <div css={styles.app}>
      <header css={styles.appHeader}>
        <img src={logo} css={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          css={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
