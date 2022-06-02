import styled from "styled-components";
import variables from "./variables";

const StyledScroll = styled.div`
  ${variables}

  .scroll-container {
    position: fixed;
    right: 6vw;
    bottom: 6vh;
    z-index: 10;
    transition: 0.3s;
    border-radius: 80px;
    background-color: rgba(174, 187, 207, 0.8);
    cursor: pointer;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 6%);

    height: 2.4em;
    width: 2.4em;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scroll-container:hover {
    background-color: var(--orange);
  }

  .scroll-to-top {
    border: none;
    border-radius: 100vw;
    background: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  .scroll-to-top:focus {
    outline: 2px solid rgba(174, 187, 207, 0.4);
    border-radius: 100vw;
  }

  .scroll-to-top svg {
    margin-top: 0.1em;
    width: 1.4em;
  }

  .scroll-to-top path {
    fill: white;
  }
`;

export default StyledScroll;
