import {useState} from "react";
import "./CheckBox.css";

export var check = false;

function setCheck() {
    check = (!check);
}

export const Checkbox = ({refreshList}) => {
    const [checked, setChecked] = useState(false);

    const updateText = () => {
        setChecked(!checked);
        refreshList(0);
    };
    
    
    return (
        <div className="center">
            <input type="checkbox" onChange={updateText} onClick={setCheck} checked={checked}/>
            Alle Anzeigen
        </div>
    );
};
