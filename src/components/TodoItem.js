import React, { useRef } from "react";
import ContentEditable from "react-contenteditable";
import { StyledItem } from "../styles";

const TodoItem = ({
  todo,
  handleCheckboxClick,
  handleTodoChange,
  handleDelete,
}) => {
  const text = useRef(todo.text);

  const handleChange = (e) => {
    text.current = e.target.value;
    handleTodoChange(text.current, todo.id);

    if (text.current === "" || text.current === "undefined") {
      handleBackSpace(e);
    }
  };

  const handleBackSpace = (e) => {
    if (text.current === "" || text.current === "undefined") {
      if (e.keyCode === 8) {
        handleDelete(todo.id);
      }
    }
  };

  return (
    <StyledItem isChecked={todo.isChecked}>
      <div className="todo-container">
        <label className="checkbox">
          <input
            className="default-checkbox"
            type="checkbox"
            checked={todo.isChecked}
            onChange={() => handleCheckboxClick(todo.id)}
          />
          <div className="custom-checkbox">
            <svg
              className="checkmark"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9571 0.292893C14.3476 0.683417 14.3476 1.31658 13.9571 1.70711L5.95711 9.70711C5.56658 10.0976 4.93342 10.0976 4.54289 9.70711L0.542893 5.70711C0.152369 5.31658 0.152369 4.68342 0.542893 4.29289C0.933417 3.90237 1.56658 3.90237 1.95711 4.29289L5.25 7.58579L12.5429 0.292893C12.9334 -0.0976311 13.5666 -0.0976311 13.9571 0.292893Z"
                fill="white"
              />
            </svg>
          </div>
        </label>
        <ContentEditable
          className={!todo.isChecked ? "todo-text" : "todo-text completed"}
          disabled={todo.isChecked ? true : false}
          html={text.current}
          onChange={handleChange}
          onKeyDown={handleBackSpace}
        ></ContentEditable>
      </div>

      <button className="delete-icon" onClick={() => handleDelete(todo.id)}>
        <svg viewBox="0 0 20 22" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.25 0C7.72919 0 7.25308 0.294253 7.02016 0.760081L6.02521 2.75H1.375C0.615609 2.75 0 3.36561 0 4.125C0 4.88439 0.615609 5.5 1.375 5.5L1.375 19.25C1.375 20.7688 2.60622 22 4.125 22H15.125C16.6438 22 17.875 20.7688 17.875 19.25V5.5C18.6344 5.5 19.25 4.88439 19.25 4.125C19.25 3.36561 18.6344 2.75 17.875 2.75H13.2248L12.2298 0.760081C11.9969 0.294253 11.5208 0 11 0H8.25ZM5.5 8.25C5.5 7.49061 6.11561 6.875 6.875 6.875C7.63439 6.875 8.25 7.49061 8.25 8.25V16.5C8.25 17.2594 7.63439 17.875 6.875 17.875C6.11561 17.875 5.5 17.2594 5.5 16.5V8.25ZM12.375 6.875C11.6156 6.875 11 7.49061 11 8.25V16.5C11 17.2594 11.6156 17.875 12.375 17.875C13.1344 17.875 13.75 17.2594 13.75 16.5V8.25C13.75 7.49061 13.1344 6.875 12.375 6.875Z"
            fill="white"
          />
        </svg>
      </button>
    </StyledItem>
  );
};

export default TodoItem;
