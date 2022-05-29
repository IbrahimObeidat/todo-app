import React from "react";
import TodoItem from "./TodoItem";

const TodosList = ({
  todos,
  handleCheckboxClick,
  handleTodoChange,
  handleDelete,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCheckboxClick={handleCheckboxClick}
            handleTodoChange={handleTodoChange}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default TodosList;
