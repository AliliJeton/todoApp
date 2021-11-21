import Todo from "./Todo";
import { eingabe } from "./TodoForm";

function TodoList({ todos, setComplete, removeTodo, check, setPrio }) {
  //filter for completed todos
  if (!check) {
    todos = todos.filter((todo) => !todo.isCompleted);
    } 
  
  //todo search function
  todos = todos.filter((todo) => todo.task.includes(eingabe));
    

  return (
    <table className="todo_list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          setComplete={setComplete}
          removeTodo={removeTodo}
          setPrio={setPrio}
        />
      ))}
    </table>
  );
}

export default TodoList;