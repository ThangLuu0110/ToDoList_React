import React from "react";
import styles from '../Styles/Input.module.css';

function Input( props ){
    
    const handleChange = (e) => {
        props.handleChange(e.target.value)
    }

    return(
    <div className={styles.wrapper}>
        <input  value={props.inputValue} 
                type="text"
                placeholder="Add things to do..." 
                onChange={handleChange} 
                className={styles.input} 
                maxLength={20}     
        />
        <button onClick={props.handleSave} className={styles.input__button}>
            Add
        </button>
    </div>
    )
}

export default Input;