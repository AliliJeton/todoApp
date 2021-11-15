import React from "react";

function Todo({todo, setComplete, removeTodo}) {
    function handleCheckbox() {
        setComplete(todo.id);
    }

    function handleRemove() {
        removeTodo(todo.id);
    }

    return (
        <tr className="todo">
            <td><input type="checkbox" onClick={handleCheckbox}/></td>
            <td>{todo.task}</td>
            <td>
                <button onClick={handleRemove}>Löschen</button>
            </td>
        </tr>
    );
}

export default Todo;