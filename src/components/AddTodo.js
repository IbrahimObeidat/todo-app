import React from "react";

const AddTodo = ({ textInput, setTextInput, handleSubmit }) => {
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your todo here..."
          onChange={handleInputChange}
          value={textInput}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
