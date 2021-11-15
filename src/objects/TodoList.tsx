import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setComplete, removeTodo }) {
  return (
    <table className="todo_list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          setComplete={setComplete}
          removeTodo={removeTodo}
        />
      ))}
    </table>
  );
}

export default TodoList;