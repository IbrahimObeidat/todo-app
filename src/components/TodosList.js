import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, handleCheckboxClick, handleTodoChange }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCheckboxClick={handleCheckboxClick}
            handleTodoChange={handleTodoChange}
          />
        );
      })}
    </div>
  );
};

export default TodosList;
