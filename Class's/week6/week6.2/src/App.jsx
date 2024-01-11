import { useState } from 'react'
import axios from "axios";
import './App.css'
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <Todo id={count} />
      <button onClick={() => { setCount(1) }}>1</button>
      <button onClick={() => { setCount(2) }}>2</button>
      <button onClick={() => { setCount(3) }}>3</button>
      <button onClick={() => { setCount(4) }}>4</button>
    </div>
  )
}

function Todo({ id }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(function (res) {
        setTodos(res.data.todo)
      })
  }, [id])

  return (
    <>
      <div>
        {todos.title}
      </div>
      <div>
        {todos.description}
      </div>
    </>
  )
}

export default App
