import React, { useEffect, useRef } from "react";
import styles from '../Styles/OtherExtentions.module.css';

function OtherExtentions( props ){
    const allButton = useRef(null);
    const completedButton = useRef(null);
    const incompletedButton = useRef(null);

    useEffect(() => {
        if(props.number === JSON.parse(localStorage.getItem("todos")).length){
            allButton.current.classList.add(`${styles.clicked}`)
            completedButton.current.classList.remove(`${styles.clicked}`)
            incompletedButton.current.classList.remove(`${styles.clicked}`)
        }
    }, [props.number])

    const showAll = () => {
        props.showAll()
        allButton.current.classList.add(`${styles.clicked}`)
        completedButton.current.classList.remove(`${styles.clicked}`)
        incompletedButton.current.classList.remove(`${styles.clicked}`)
        
    }
    const showCompleted = () => {
        props.showCompleted()
        allButton.current.classList.remove(`${styles.clicked}`)
        completedButton.current.classList.add(`${styles.clicked}`)
        incompletedButton.current.classList.remove(`${styles.clicked}`)
        
    }
    const showInCompleted = () => {
        props.showInCompleted()
        allButton.current.classList.remove(`${styles.clicked}`)
        completedButton.current.classList.remove(`${styles.clicked}`)
        incompletedButton.current.classList.add(`${styles.clicked}`)
       
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.number}>
                <span>
                    {`(${props.number}) ${props.number > 1 ? 'items': 'item'}`}
                </span>
            </div>
            <button 
                ref={allButton} 
                onClick={showAll} 
                className={`${styles.extentions__button} ${styles.clicked}`}
            >
                All
            </button>

            <button 
                ref={completedButton}
                onClick={showCompleted} 
                className={styles.extentions__button}
            >
                Completed
            </button>

            <button 
                ref={incompletedButton}
                onClick={showInCompleted} 
                className={styles.extentions__button}
            >
                InCompleted
            </button>
        </div>
    )
}

export default OtherExtentions;