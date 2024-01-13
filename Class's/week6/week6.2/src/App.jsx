import { useMemo, useState } from 'react';
import './App.css'
// import Todo from './components/Todo';
// import Memo from "./components/Memo";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0)

  let count = useMemo(() => {
    let sum = 0
    for (let i = 1; i <= inputValue; i++) {
      sum = sum + i;
    }
    return sum;
  }, [inputValue])

  return (
    <div>
      {/* <Memo /> */}
      {/* <Todo id={count} /> */}
      <input type="number" onChange={function (e) {
        setInputValue(e.target.value)
      }} placeholder='Enter number' />
      <br />
      <h2>The sum from 1 to {inputValue} is {count}</h2>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Count : {counter}</button>
    </div>
  )
}

export default App
