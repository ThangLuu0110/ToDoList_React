import React, { useState } from "react";
import Input from "./Input";
import ToDo from "./ToDo";
import styles from '../Styles/ToDoList.module.css';
import OtherExtentions from "./OtherExtentions";

function ToDoList(){
    const [ inputValue, setInputValue ] = useState('')
    const [ dataValue, setDataValue ] = useState(JSON.parse(localStorage.getItem("todos")) ?? [])
    const [ noData, setNoData ] =  useState(dataValue.length)

    const handleChangeInput = (todoInput) => {
        setInputValue(todoInput)
    }
    
    const handleSaveInput = (e) => {
        if(inputValue === ''){
            alert('Please add things to do')
            
        }
        else{
            const check = dataValue.filter(data => {
                return data.name === inputValue
            })
            
            if(check.length > 0){
                alert('It is already in the list')
            }
            else{
                const newList = [...dataValue,{
                name: inputValue,
                isCompleted: false,
                }]
                localStorage.setItem("todos", JSON.stringify(newList));
                setNoData(newList.length)
                setDataValue(newList);
            }
        }   
        setInputValue('')
    }

    const handleDeleteItem = (name) => {
        const listTodos = JSON.parse(localStorage.getItem("todos"));
        const newListTodos = listTodos.filter((item) => item.name !== name);
        setNoData(newListTodos.length)
        setDataValue(newListTodos)
        localStorage.setItem("todos", JSON.stringify(newListTodos));
    }

    const showAllToDo = () => {
        const listAll = JSON.parse(localStorage.getItem("todos"))
        setNoData(listAll.length)
        setDataValue(listAll);
    }

    const showCompleted = () => {
        const listComplted = JSON.parse(localStorage.getItem("todos")).filter(todo => {
            return todo.isCompleted === true;
        })
        setNoData(listComplted.length)
        setDataValue(listComplted);
    }

    const showInCompleted = () => {
        const listInComplted = JSON.parse(localStorage.getItem("todos")).filter(todo => {
            return todo.isCompleted === false;
        })
        setNoData(listInComplted.length)
        setDataValue(listInComplted);
    }

    return(
        <div>
            <Input  
                handleChange={handleChangeInput} 
                inputValue={inputValue} 
                handleSave={handleSaveInput}
                dataValue={dataValue}
            />
            <ul className={styles.todo__list}>
                {dataValue.map((data,index) => (
                    <ToDo 
                        data={data} 
                        name={data.name} 
                        dataValue={dataValue} 
                        handleDeleteItem={handleDeleteItem}
                        key={`key_${index}`}
                    />
                ))}
            </ul>
            <OtherExtentions 
                showAll={showAllToDo} 
                showCompleted={showCompleted}
                showInCompleted={showInCompleted}
                number={noData}
            />           
        </div>
    )
}

export default ToDoList;