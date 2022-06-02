import React from "react";
import { StyledAdd } from "../styles";

const AddTodo = ({ textInput, setTextInput, handleSubmit }) => {
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <StyledAdd>
      <div className="add-container"></div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your todo here . . ."
          onChange={handleInputChange}
          value={textInput}
        />
        <div className="add-container">
          <button className="add-button">
            <svg
              viewBox="0 0 23 22"
              // fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.25 0C12.1179 0 12.8214 0.703552 12.8214 1.57143V9.42857H20.6786C21.5464 9.42857 22.25 10.1321 22.25 11C22.25 11.8679 21.5464 12.5714 20.6786 12.5714H12.8214V20.4286C12.8214 21.2964 12.1179 22 11.25 22C10.3821 22 9.67857 21.2964 9.67857 20.4286V12.5714H1.82143C0.953552 12.5714 0.25 11.8679 0.25 11C0.25 10.1321 0.953553 9.42857 1.82143 9.42857L9.67857 9.42857V1.57143C9.67857 0.703552 10.3821 0 11.25 0Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </form>
    </StyledAdd>
  );
};

export default AddTodo;
