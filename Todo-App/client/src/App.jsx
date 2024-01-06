import { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:8000/todos")
  //   .then(async function (res) {
  //     const json = res.json();
  //     setTodos(json.todos)
  //   })

  // useEffect Hook
  

  return (
    <div className="h-screen flex justify-center items-start">
      <div className="flex flex-col h-screen">
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </div>
  )
}

export default App
