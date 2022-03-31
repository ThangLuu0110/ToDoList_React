import React from 'react';
import styles from '../Styles/ToDo.module.css'

function ToDo( props ){

    const handleComplete = (e) => {
        e.target.classList.toggle(`${styles.completed}`)
       
        if(e.target.classList.contains(`${styles.completed}`)){
            props.dataValue[props.name].isCompleted = true;
        }
        else{
            props.dataValue[props.name].isCompleted = false;
        }
        localStorage.setItem("todos", JSON.stringify(props.dataValue));
    }

    const handleDelete = () => {
        props.handleDeleteItem(props.data.name);
    }

    return(
        <li  className={styles.todo} key={`item_${props.index}`}>
            <span className={`${props.data.isCompleted ? styles.completed : ''} ${styles.todo__text}`}
                    onClick={handleComplete}        
            >
                {props.data.name}
            </span>
            <button onClick={handleDelete}
                    className={styles.todo__button}
            >
                Delete
            </button>
        </li>
    )
}

export default ToDo;