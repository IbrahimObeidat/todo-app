import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, handleCheckboxClick }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCheckboxClick={handleCheckboxClick}
          />
        );
      })}
    </div>
  );
};

export default TodosList;
