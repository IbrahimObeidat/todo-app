import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${variables}

  body{
    margin: 0;

    background-image:
      linear-gradient(
        to top, hsla(216, 100.00%, 58.00%, 0.10), 
        hsla(216, 0.00%, 100.00%, 0.00) 50%),
      linear-gradient(
        to bottom, hsla(14.64114832535885, 
        89.70%, 54.31%, 0.08), 
        hsla(15, 0.00%, 100.00%, 0.00) 40%
      );
    
    background-attachment:fixed;

    font-family: var(--font);
    font-size: 1vw;
    line-height: 1.6em;
    color: var(--black);
  }

  @media only screen and (min-width: 1600px) {
     body {
       font-size: 1.2em;
       transition: all 0.02s;
      }
  }

  .App{
    position: relative;
  }

  .bottom{
    height: 2em;
  }
`;

export default GlobalStyle;
