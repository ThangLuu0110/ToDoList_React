import './App.css';
import React from 'react';
import Header from './Component/Header';
import ToDoList from './Component/ToDoList';
import styles from './Styles/Base.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
