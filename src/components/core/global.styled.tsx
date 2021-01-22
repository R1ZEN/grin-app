import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }
  
  body {
    background: #F4F5F7;
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
`