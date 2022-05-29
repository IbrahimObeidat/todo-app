import { useState } from "react";
import { AddTodo, TodosList } from "./components";

function App() {
  const [todos, setTodos] = useState([]);
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (event) => {
    //to prevent the default action of refrishing the page onSubmit
    event.preventDefault();

    let todosLength = todos.length;

    //if text input is empty, don't do anything on submit
    if (textInput !== "") {
      //Add the new todo to the list of todos
      const newTodo = {
        id: (todosLength += 1),
        text: textInput,
        isChecked: false,
      };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);

      //empty the input field after adding
      setTextInput("");
    } else {
      return null;
    }
  };

  const handleCheckboxClick = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isChecked: !todo.isChecked };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };

  const handleTodoChange = (updatedText, id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: updatedText };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <AddTodo
        textInput={textInput}
        setTextInput={setTextInput}
        handleSubmit={handleSubmit}
      />
      <TodosList
        todos={todos}
        handleCheckboxClick={handleCheckboxClick}
        handleTodoChange={handleTodoChange}
      />
    </div>
  );
}

export default App;
