import React from "react";

const TodoItem = ({ todo, handleCheckboxClick }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={todo.isChecked}
        onChange={() => handleCheckboxClick(todo.id)}
      />
      <textarea>{todo.text}</textarea>
    </div>
  );
};

export default TodoItem;
