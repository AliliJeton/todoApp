import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {Checkbox} from "../CheckBox";

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        isCompleted: false,
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuidv4()});
            setTodo({...todo, task: ""});
        }
    }

    return (
        <div id="input_form_todo">
            <form onSubmit={handleSubmit}>
                <input
                    name="task"
                    type="text"
                    placeholder="Aufgabe..."
                    value={todo.task}
                    onChange={handleTaskInputChange}
                />
                <button type="submit">Hinzufügen</button>
            </form>
        </div>
    );
}

export default TodoForm;