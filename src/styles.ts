import { css, keyframes } from '@emotion/core';

export const app = css`
  text-align: center;
`;

export const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const appLogo = css`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

export const appHeader = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const appLink = css`
  color: #61dafb;
`;

export default {
  app,
  appLogoSpin,
  appLogo,
  appHeader,
  appLink,
};
