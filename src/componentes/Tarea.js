import React from "react";
import "../App.css";

const Tarea = (props) => {

    const tareaLista = () => {
        props.listo(props.id);

    }
 
    return (
        <div>
            <div className="tarea">
            <span>{props.tarea}</span>
            <span onClick={tareaLista}>Listo</span>
            </div>
        </div>
    )

}

export default Tarea;