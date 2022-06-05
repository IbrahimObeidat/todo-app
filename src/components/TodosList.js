import React from "react";
import TodoItem from "./TodoItem";
import { StyledList } from "../styles";

const TodosList = ({
  todos,
  handleCheckboxClick,
  handleTodoChange,
  handleDelete,
}) => {
  return (
    <StyledList>
      {todos && todos.length ? (
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCheckboxClick={handleCheckboxClick}
              handleTodoChange={handleTodoChange}
              handleDelete={handleDelete}
            />
          );
        })
      ) : (
        <h3>There are no todos</h3>
      )}
    </StyledList>
  );
};

export default TodosList;
