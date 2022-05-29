import React from "react";

const TodoItem = ({
  todo,
  handleCheckboxClick,
  handleTodoChange,
  handleDelete,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={todo.isChecked}
        onChange={() => handleCheckboxClick(todo.id)}
      />
      <textarea
        onChange={(event) => handleTodoChange(event.target.value, todo.id)}
      >
        {todo.text}
      </textarea>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
