import styled from "styled-components";
import variables from "./variables";

const StyledItem = styled.div`
  ${variables}
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 45.14em;

  .todo-container {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
  }

  .default-checkbox {
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .custom-checkbox {
    width: 1em;
    height: 1em;

    min-width: 8px;
    min-height: 8px;

    cursor: pointer;

    background: white;
    border-radius: 100vw;
    border: 2px solid rgba(243, 85, 34, 0.7);
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .default-checkbox:hover + .custom-checkbox {
    border: 2px solid rgba(243, 85, 34, 1);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 6px 12px rgba(0, 0, 0, 0.1);
  }

  .default-checkbox:checked + .custom-checkbox {
    background-color: #aebbcf;
    border: 2px solid #aebbcf;
  }

  .checkmark {
    color: white;
    visibility: hidden;
  }

  .default-checkbox:checked + .custom-checkbox .checkmark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: inherit;
    background-color: transparent;
    visibility: visible;
  }

  .default-checkbox:focus + .custom-checkbox {
    outline: 1px solid rgba(174, 187, 207, 0.5);
  }

  .todo-text {
    font-family: inherit;
    font-size: 1.3em;
    line-height: 1.4rem;

    background-color: transparent;
    /* resize: none; */
    /* border: none; */
    /* overflow: hidden; */

    width: 100%;

    margin-top: -0.3em;
    margin-left: 0.4em;
    margin-right: 0.5em;
    padding: 0.2em 0.1em;

    border-bottom: 2px solid rgba(174, 187, 207, 0);
  }

  .todo-text.completed {
    color: #aebbcf;
    text-decoration: line-through;
    text-decoration-thickness: 1.3px;
    text-decoration-color: inherit;
  }

  .todo-text:focus {
    outline: none;
    border-bottom: 2px solid rgba(174, 187, 207, 0.5);
  }

  @media only screen and (max-width: 800px) {
    .todo-text {
      font-size: 0.8rem;
    }
  }

  .delete-icon {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 0.4em;
    visibility: hidden;
  }

  .delete-icon:hover {
    visibility: visible;
  }

  .todo-container:hover + .delete-icon {
    visibility: visible;
  }

  .delete-icon svg {
    width: 1.8em;
  }
  .delete-icon path {
    fill: #aebbcf;
  }

  .delete-icon:hover path {
    fill: rgba(243, 85, 34, 1);
  }
`;

export default StyledItem;
