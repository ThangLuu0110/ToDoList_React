import React, { useRef } from "react";
import styles from '../Styles/Input.module.css';

function Input( props ){
    const setValue = useRef(null);
    const handleChange = (e) => {
        props.handleChange(e.target.value)
    }

    const handleSave = () => {
        props.handleSave();
        setValue.current.focus();
    }

    const handleKeyDown = (e) => {
        if(e.which === 13){
            props.handleSave();
            setValue.current.focus();
        }
    }
    return(
    <div className={styles.wrapper}>
        <input  
            value={props.inputValue} 
            type="text"
            placeholder="Add things to do..." 
            onChange={handleChange} 
            className={styles.input} 
            maxLength={20}
            ref={setValue}  
            onKeyPress={handleKeyDown}  
        />
        <button 
            onClick={handleSave} 
            className={styles.input__button}
            
        >
            Add
        </button>
    </div>
    )
}

export default Input;