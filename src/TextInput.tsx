import { ChangeEvent, useState } from "react"
import './TextInput.css'

export const TextInput = () => {
    const [text, setText] = useState('')

    const updateText = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    return (
        <input
            className="inputText"
            onChange={updateText}
            placeholder="Aufgabe.."
        />
    );
}