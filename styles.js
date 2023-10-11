import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 10px;
    font-family: system-ui;
    display: flex;
    justify-content: center;
  }

  main {
    max-width: 370px;
  }

  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 16px;
  }

  h3 {
    font-size: 14px;
    position: relative;
    bottom: -0.7rem;
    text-align: right;
    right: 0.3rem;
  }

  p {
    font-size: 12px;
  }

  a {
    text-decoration: none;
    &:link {
     color: #252525
    }
    $:visited: #252525s
  }
`;
