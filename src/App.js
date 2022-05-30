import { useEffect, useState } from "react";
import { AddTodo, TodosList } from "./components";
import { v4 as uuidv4 } from "uuid";
import { GlobalStyle } from "./styles";

function App() {
  const savedTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(savedTodos);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (event) => {
    //to prevent the default action of refrishing the page onSubmit
    event.preventDefault();

    //if text input is empty, don't do anything on submit
    if (textInput !== "") {
      //Add the new todo to the list of todos
      const newTodo = {
        id: uuidv4(),
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

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <GlobalStyle />
      <AddTodo
        textInput={textInput}
        setTextInput={setTextInput}
        handleSubmit={handleSubmit}
      />
      <TodosList
        todos={todos}
        handleCheckboxClick={handleCheckboxClick}
        handleTodoChange={handleTodoChange}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
