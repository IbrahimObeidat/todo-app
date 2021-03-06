import styled from "styled-components";
import variables from "./variables";

const StyledItem = styled.div`
  ${variables}
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 44em;

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

    min-width: 0.9em;
    min-height: 0.9em;

    cursor: pointer;

    background: none;
    border-radius: 100vw;
    border: 2.2px solid rgba(243, 85, 34, 0.7);
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .default-checkbox:hover + .custom-checkbox {
    border: 2.2px solid rgba(243, 85, 34, 1);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1), 0px 6px 12px rgba(0, 0, 0, 0.1);
  }

  .default-checkbox:checked + .custom-checkbox {
    background-color: #aebbcf;
    border: 2.2px solid #aebbcf;
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
    width: 0.8em;
    background-color: transparent;
    visibility: visible;
  }

  .default-checkbox:focus + .custom-checkbox {
    outline: 2.2px solid rgba(174, 187, 207, 0.6);
  }

  .todo-text {
    font-family: inherit;
    font-size: 1.2em;
    line-height: 1.8rem;

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
    cursor: default;
    font-weight: 500;
    text-decoration: line-through;
    text-decoration-thickness: 2.4px;
    text-decoration-color: rgba(174, 187, 207, 0.7);
  }

  .todo-text:focus {
    outline: none;
    border-bottom: 2px solid rgba(174, 187, 207, 0.6);
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
    padding: 0.2em;

    visibility: hidden;
    transition: 0.05s;
  }

  .delete-icon:focus {
    outline: 2.2px solid rgba(174, 187, 207, 0.8);
    border-radius: 0.4em;
  }

  .todo-container:hover + .delete-icon,
  .delete-icon:hover {
    visibility: visible;
    transition: 0.05s;
  }

  .delete-icon svg {
    width: 2em;
  }
  .delete-icon path {
    fill: #aebbcf;
  }

  .delete-icon:hover path {
    fill: rgba(243, 85, 34, 1);
  }
`;

export default StyledItem;
