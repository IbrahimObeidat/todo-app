import styled from "styled-components";
import variables from "./variables";

const StyledAdd = styled.div`
  ${variables}

  position: sticky;
  top: 6%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 46em;

  form {
    display: flex;
    gap: 1em;
    position: relative;
    align-items: center;
    width: 100%;
  }

  input {
    width: 100%;
    border: 2px solid rgba(174, 187, 207, 0.4);
    border-radius: 0.4em;
    height: 2em;
    background: white;
    font-family: inherit;
    font-size: 1em;
    padding: 0.2em 0.6em;
    padding-right: 2.9em;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.06);
  }

  input:focus {
    outline: 2.2px solid rgba(174, 187, 207, 0.8);
    border-radius: 0.4em;
  }

  .add-button:focus {
    outline: 2.2px solid rgba(174, 187, 207, 1);
    border-radius: 0 0.4em 0.4em 0;
    background: rgba(243, 85, 34, 1);
  }

  .add-container {
    background: rgba(243, 85, 34, 0.8);
    border-radius: 0 0.4em 0.4em 0;
    height: 100%;
    width: 2.4em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
  }

  .add-container:hover {
    background: rgba(243, 85, 34, 1);
  }

  .add-button {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  /* .add-button:focus {
    outline: 2.2px solid rgba(174, 187, 207, 0.8);
  } */

  .add-button svg {
    fill: rgba(243, 85, 34, 1);
    width: 1.6em;
  }

  /* .add-button svg path {
    fill: rgba(243, 85, 34, 1);
  } */
`;

export default StyledAdd;
