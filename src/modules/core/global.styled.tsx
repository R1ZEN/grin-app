import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    color: #fff;
    background: #6554c0;
  }
  
  html {
    font-size: 10px;
  }

  body {
    font-feature-settings: "tnum";
    -webkit-font-smoothing: antialiased;
    background: #F4F5F7;
  }

  figure {
    margin: 0;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    outline: none;
  }

  input {
    border: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  h1 {
    margin: 0;
  }
  
  p {
    margin: 0;
  }
`;