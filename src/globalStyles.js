import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
  * {
    box-sizing: border-box;
    font-family: ${theme.fontFamily.bodyText}
  }

  body {
    margin: 0 auto;
    max-width: 1800px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  main, header {
    padding: 0 20px;
  }

  h1, h2, h3, h4, p, a, button {
    margin: 0;
  }

  h2, h3, h4 {
    font-family: ${theme.fontFamily.primary};
    font-weight: 500;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  form, article {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-top: 10px;
    font-size: ${theme.fontSizes.small};
  }

  input {
    font-size: ${theme.fontSizes.default};
    padding: 3px 10px;
    border: 1px solid grey;
  }
  
  input, button, textarea, select {
    font: inherit;
    border-radius: 3px;
  }

  button {
    margin-top: 16px;
    padding: 0px;
    border: none;
    color: inherit;
    background: inherit;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    button, a:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
);
