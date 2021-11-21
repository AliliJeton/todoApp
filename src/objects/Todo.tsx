import { FaBolt } from "react-icons/fa";

function Todo({ todo, setComplete, removeTodo, setPrio }) {
  function handleCheckbox() {
    setComplete(todo.id);
  }

  function handleRemove() {
    removeTodo(todo.id);
  }

  function handlePrio(prio) {
    setPrio(todo.id, prio);
  }

  return (
    <tr className="todo">
      <td>
        <input
          type="checkbox"
          onClick={handleCheckbox}
          checked={todo.isCompleted}
        />
      </td>
      <td>
        <FaBolt color={todo.prioColorLow} onClick={() => handlePrio(1)} />{" "}
        <FaBolt color={todo.prioColorMed} onClick={() => handlePrio(2)} />{" "}
        <FaBolt color={todo.prioColorHigh} onClick={() => handlePrio(3)} />
      </td>
      <td>{todo.task}</td>
      <td>
        <button onClick={handleRemove}>Löschen</button>
      </td>
    </tr>
  );
}

export default Todo;