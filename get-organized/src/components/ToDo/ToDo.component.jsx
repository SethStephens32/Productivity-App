import React from 'react'
import './ToDo.styles.scss'
import { useState, useEffect, useRef } from 'react'

const ToDo = () => {

  const [value, setValue] = useState("Add a task");

  const inputReset = useRef(null);

  const [arr, setArr] = useState([]);

  const submitValue = () => {
    const todoItem = {
      todo: value
    };
    setArr((prevArr) => [...prevArr, todoItem]);
    inputReset.current.value = ""; // resets input field
  };

  return (
    <div className="todo-container">
        <div className="todo-feature">
      <input ref={inputReset} placeholder={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={submitValue}>ADD</button>
    </div>
      <div className="todo-list">
      {arr.map(({ todo }) => (
        <div key={todo} className="todo">{todo.toUpperCase()}</div>
      ))}
      </div>
    </div>
  );
}
    

export default ToDo