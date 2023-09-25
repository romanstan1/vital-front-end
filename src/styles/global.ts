// reset CSS + injecting fonts
// DO NOT USE THIS FILE TO OVERWRITE STYLING OF CSS CLASSES

import { createGlobalStyle } from "styled-components";
import COLORS from "./colors";

export default createGlobalStyle`
  html {
      height: 100%;
  };

  body {
      height: 100%;
      overflow: auto;
  };
 
  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    transition: background-color 1s ease;
    color: ${COLORS.black};
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overscroll-behavior-x: none;
  }

  * {
    box-sizing: border-box;
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
    color: inherit;
    font-weight: inherit;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  } 
`;
