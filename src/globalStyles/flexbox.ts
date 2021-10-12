import { css } from '@emotion/core';
import { BREAKPOINTS } from './breakpoints';


/**
 * A flex row style.
 * Convenient (dev ergonomic), reduces code (bundle size), reduces style insertions to the DOM (performance)
 */
export const FLEX_ROW = css`
  display: flex;
  flex-direction: row;
`;


/**
 * A flex column style.
 * Convenient (dev ergonomic), reduces code (bundle size), reduces style insertions to the DOM (performance)
 */
export const FLEX_COLUMN = css`
  display: flex;
  flex-direction: column;
`;


/**
 * A flex row that turns into a column on phones
 * Convenient (dev ergonomic), reduces code (bundle size), reduces style insertions to the DOM (performance)
 */
export const FLEX_ADAPTIVE = css`
  display: flex;
  flex-direction: row;

  ${BREAKPOINTS.PHONE} {
    flex-direction: column;
  }
`;


/**
 * A flex style that aligns & justifies centered
 * Convenient (dev ergonomic), reduces code (bundle size), reduces style insertions to the DOM (performance)
 */
export const FLEX_CENTERED = css`
  align-items: center;
  justify-content: center;
`;

export const FLEX_CENTER_SELF = css`
  align-self: center;
  justify-self: center;
`;
