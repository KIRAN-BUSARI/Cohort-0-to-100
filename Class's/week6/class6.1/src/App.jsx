// import { useState } from 'react'
import './App.css'
// import Todo from './components/Todo'
import CardWrapper from './components/CardWrapper';
// import TextComponent from './components/TextComponent';

// let counter = 4;

// function HeaderWithButton() {
//   const [fname, setFname] = useState("Kiran")

//   function handleChange() {
//     setFname("prathu")
//   }
//   return (
//     <>
//       <button onClick={handleChange} >Change name</button>
//       <Header propName={fname}/>
//     </>
//   )

// }

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "GYM",
  //     description: "we r gng to gym"
  //   }, {
  //     id: 2,
  //     title: "GYM1",
  //     description: "we r gng to gym1"
  //   },{
  //     id: 3,
  //     title: "GYM2",
  //     description: "we r gng to gym2"
  //   },
  // ])

  // function addTodo() {
  //   setTodos([...todos,
  //   {
  //     id: counter++,
  //     title: "gym4",
  //     description: "kgjlkdsaj"
  //   }
  //   ])
  // }
  
  return (
    <>
      {/* <HeaderWithButton />
      <h2>Hello </h2> */}
      {/* <button onClick={addTodo}>Add T odo</button>
      {todos.map(todo => <Todo title={todo.title} key={todo.id} description={todo.description} />)} */}

      {/* <CardWrapper innerText={<TextComponent/>} /> */}
      {/* or */}
      <CardWrapper>
        Hi there
      </CardWrapper>
      <CardWrapper>
        Hi there
      </CardWrapper>
      
    </>
  )
}

// function Header({ propName }) {
//   return (
//     <div>
//       <h2>My name is : {propName}</h2>
//     </div>
//   )
// }

export default App
