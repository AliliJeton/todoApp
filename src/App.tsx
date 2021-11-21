import "./App.css";
import { AppBar } from "./AppBar";
import { Checkbox } from "./CheckBox";
import { check } from "./CheckBox";
import { useState } from "react";
import TodoForm from "./objects/TodoForm";
import TodoList from "./objects/TodoList";

export function App() {
  //list of todos
  const [todos, setTodo] = useState([]);

  //add a new todo to the todos list
  function addTodo(todo) {
    setTodo([todo, ...todos]);
  }

  //set the todo with the id ? completed
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

  //remove the todo with id ? from the todos list
  function removeTodo(id) {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  //set priority of the todo with the id ?
  function setPrio(id, prio) {
    setTodo(
      todos.map((todo) => {
        if (todo.id === id) {
          if (todo.prio === prio) {
            return {
              ...todo,
              prio: 0,
              prioColorLow: "honeydew",
              prioColorMed: "honeydew",
              prioColorHigh: "honeydew",
            };
          }
          if (prio === 1) {
            return {
              ...todo,
              prio: 1,
              prioColorLow: "forestgreen",
              prioColorMed: "honeydew",
              prioColorHigh: "honeydew",
            };
          }
          if (prio === 2) {
            return {
              ...todo,
              prio: 2,
              prioColorLow: "forestgreen",
              prioColorMed: "forestgreen",
              prioColorHigh: "honeydew",
            };
          }
          if (prio === 3) {
            return {
              ...todo,
              prio: 3,
              prioColorLow: "forestgreen",
              prioColorMed: "forestgreen",
              prioColorHigh: "forestgreen",
            };
          }
          return {
            ...todo,
            prio: prio,
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="app">
      <AppBar />
      <div className="container">
        <TodoForm addTodo={addTodo} setChecked={setComplete} />
        <Checkbox
        refreshList={setComplete}
        />
        <TodoList
          todos={todos}
          setComplete={setComplete}
          removeTodo={removeTodo}
          check={check}
          setPrio={setPrio}
        />
      </div>
    </div>
  );
}

export default App;