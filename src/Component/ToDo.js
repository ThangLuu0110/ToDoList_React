import React from 'react';
import styles from '../Styles/ToDo.module.css'

function ToDo( props ){

    const handleComplete = (e) => {
        const checkList = JSON.parse(localStorage.getItem("todos"));
        e.target.classList.toggle(`${styles.completed}`)
       
        if(e.target.classList.contains(`${styles.completed}`)){
            checkList[props.index].isCompleted = true;
        }
        else{
            checkList[props.index].isCompleted = false;
        }
        localStorage.setItem("todos", JSON.stringify(checkList));

        console.log(checkList);
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