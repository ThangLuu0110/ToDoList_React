import React from 'react';
import styles from '../Styles/ToDo.module.css'

function ToDo( props ){

    const handleComplete = (e) => {
        e.target.classList.toggle(`${styles.completed}`)
       
        if(e.target.classList.contains(`${styles.completed}`)){
            props.dataValue[props.index].isCompleted = true;
        }
        else{
            props.dataValue[props.index].isCompleted = false;
        }
        localStorage.setItem("todos", JSON.stringify(props.dataValue));
    }

    
    
    return(
        <li key={props.index} id={props.index}>
            <span className={`${props.data.isCompleted ? styles.completed : ''}`}
                    onClick={handleComplete}        
            >
                {props.data.name}
            </span>
            <button onClick={props.handleDelete}>
                Xóa
            </button>
        </li>
    )
}

export default ToDo;