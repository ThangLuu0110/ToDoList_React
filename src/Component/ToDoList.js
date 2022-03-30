import React, { useState } from "react";
import Input from "./Input";
import ToDo from "./ToDo";
import styles from '../Styles/ToDoList.module.css';

function ToDoList(){
    const [ inputValue, setInputValue ] = useState('')
    const [ dataValue, setDataValue ] = useState(JSON.parse(localStorage.getItem("todos")) ?? [])

    const handleChangeInput = (todoInput) => {
        setInputValue(todoInput)
    }
    
    const handleSaveInput = () => {
        if(inputValue === ''){
            alert('Please add things to do')
        }
        else{
            setDataValue((prev) => {
                const newList = [...prev, {
                    name: inputValue,
                    isCompleted: false,
                }];
                localStorage.setItem("todos", JSON.stringify(newList));
                return newList;
            });
        }
        setInputValue('')
    }
    
    const handleDelete = (e) => {
        setDataValue((prev) => {
            const newDeleteList =  dataValue.splice(e.target.parentElement.id,1);
            localStorage.setItem("todos", JSON.stringify(newDeleteList));
            return newDeleteList;
        });
    }

    return(
        <div>
            <Input handleChange={handleChangeInput} inputValue={inputValue} handleSave={handleSaveInput} />
            <ul className={styles.todo__list}>
                {dataValue.map((data,index) => (
                    <ToDo data={data} index={index} dataValue={dataValue} handleDelete={handleDelete}/>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;