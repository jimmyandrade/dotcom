import { createGlobalStyle, css } from "styled-components";

export const AppGlobalStyles = createGlobalStyle(({ theme }) => css`
  html, body {
    display: block;
    height: 100%;
    overscroll-behavior-y: none;
    scroll-behavior: smooth;
    tab-size: 4;
    width: 100%;
  }

  html {
    -webkit-text-size-adjust: 100%;
    font-family: ${theme.fontFamily.fallback}, ${theme.fontFamily.default};
    font-size: 1rem;
    line-height: 1.5rem;
  }

  body, h1, h2, input, td, th {
    font-family: inherit;
    line-height: inherit;
  }

  html, body, h1, h2, li, p, pre, ul {
    margin: 0;
    padding: 0;
  }

  li, ol, ul {
    list-style-type: none;
  }

  h1, h2 {
    font-size: inherit;
    font-weight: inherit;
  }

  *,
  ::before,
  ::after {
    border-color: currentColor;
    border-style: solid;
    border-width: 0;
    box-sizing: border-box;
  }

`);
