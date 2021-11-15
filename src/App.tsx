import "./App.css";
import { AppBar } from "./AppBar";
import { Checkbox } from "./CheckBox";
import React, { useState } from "react";
import TodoForm from "./objects/TodoForm";
import TodoList from "./objects/TodoList";

export function App(props) {
  const [todos, setTodo] = useState([]);

  function addTodo(todo) {
    setTodo([todo, ...todos]);
  }

  function setComplete(id) {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  }

  function getCheckboxChecked(){

  }

  function removeTodo(id) {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  function filterTodo() {

    return todos.filter((todo) => !todo.isCompleted);
  }

  return (
    <div className="app">
      <AppBar />
      <div className="container">
        <TodoForm addTodo={addTodo} />
        <Checkbox />
        <TodoList
          todos={filterTodo()}
          setComplete={setComplete}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;