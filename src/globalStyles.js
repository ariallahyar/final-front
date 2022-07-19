import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
  * {
    box-sizing: border-box;
    font-family: ${theme.fontFamily.bodyText}
  }

  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0 auto;
    position: relative;
    height: auto !important; /* real browsers */
    height: 100%; /* IE6: treaded as min-height*/
    min-height: 100%; /* real browsers */
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  main {
    padding-bottom: 40px;
  }

  main, header {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1600px;
    margin: 0 auto;
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
  
  textarea {
    resize: vertical;
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
