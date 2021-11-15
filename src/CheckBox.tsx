import {ChangeEvent, useState} from "react";
import "./CheckBox.css";

export const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    const updateText = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <input type="checkbox" onChange={updateText} checked={checked}/>
            Alle Anzeigen
        </div>
    );
};
