import React, {useState} from "react";
import "../App.css";

const TareaForm = (props) => {
    const [inputText, setInputText] = useState("");
    const [validacion, setValidacion] = useState(true);

    const manejarFormulario = (event) => {
        setInputText(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if(inputText.trim() !==""){
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true);
        }else {
            setValidacion(false);
        }
        
        props.nuevaTarea(inputText);
    }

    return (
        <div>
            <form className="form" onSubmit={submit}>
            <span>Añadir Tarea</span>
            <input value={inputText} onChange={manejarFormulario}/>
            <button>Agregar</button>
            </form>

        {

            !validacion &&
            <div className="validacion">Añade una tarea Wey</div>

        }

        </div>

    )

}

export default TareaForm;