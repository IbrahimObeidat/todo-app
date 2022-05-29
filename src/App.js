import { useState } from "react";
import { AddTodo, TodosList, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (event) => {
    //to prevent the default action of refrishing the page onSubmit
    event.preventDefault();

    let todosLength = todos.length;
    // console.log(todosLength);

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
  };

  return (
    <div className="App">
      <AddTodo
        textInput={textInput}
        setTextInput={setTextInput}
        handleSubmit={handleSubmit}
      />
      <TodosList todos={todos} />
      <TodoItem />
    </div>
  );
}

export default App;
