import React from "react";
import styles from '../Styles/Input.module.css';

function Input( props ){
    
    const handleChange = (e) => {
        props.handleChange(e.target.value)
    }

    console.log(props.dataValue.length);

    return(
    <div className={`${styles.wrapper} ${props.dataValue.length > 0 ? styles.value_filled: ''}`}>
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