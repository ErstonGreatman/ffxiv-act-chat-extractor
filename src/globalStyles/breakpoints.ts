import { css } from '@emotion/react';

// Why is this here? window.matchMedia() doesn't match with @media so I had to add this part
const IS_ON_BREAKPOINTS = {
  PHONE: '(max-width: 480px)',
  TABLET: '(min-width: 481px) and (max-width: 1023px)',
  DESKTOP: '(min-width: 1024px)',
};

export const BREAKPOINTS = {
  PHONE: `@media ${IS_ON_BREAKPOINTS.PHONE}`,
  TABLET: `@media ${IS_ON_BREAKPOINTS.TABLET}`,
  DESKTOP: `@media ${IS_ON_BREAKPOINTS.DESKTOP}`,

  NOT_PHONE: `@media ${IS_ON_BREAKPOINTS.TABLET}, ${IS_ON_BREAKPOINTS.DESKTOP}`,
  NOT_TABLET: `@media ${IS_ON_BREAKPOINTS.PHONE}, ${IS_ON_BREAKPOINTS.DESKTOP}`,
  NOT_DESKTOP: `@media ${IS_ON_BREAKPOINTS.PHONE}, ${IS_ON_BREAKPOINTS.TABLET}`,
};


export const isOn = (breakpoint: string) => (win: Window): boolean => win.matchMedia(breakpoint).matches;


export const isOnPhone = isOn(IS_ON_BREAKPOINTS.PHONE);
export const isOnTablet = isOn(IS_ON_BREAKPOINTS.TABLET);
export const isOnDesktop = isOn(IS_ON_BREAKPOINTS.DESKTOP);

export const HIDE_ON_PHONE = css`
  ${BREAKPOINTS.PHONE} {
    display: none;
  }
`;

export const HIDE_ON_TABLET = css`
  ${BREAKPOINTS.TABLET} {
    display: none;
  }
`;


export const HIDE_ON_DESKTOP = css`
  ${BREAKPOINTS.DESKTOP} {
    display: none;
  }
`;

export const SHOW_ON_PHONE = css`
  ${HIDE_ON_TABLET};
  ${HIDE_ON_DESKTOP};
`;

export const SHOW_ON_TABLET = css`
  ${HIDE_ON_PHONE};
  ${HIDE_ON_DESKTOP};
`;


export const SHOW_ON_DESKTOP = css`
  ${HIDE_ON_PHONE};
  ${HIDE_ON_TABLET};
`;
