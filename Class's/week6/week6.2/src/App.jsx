import './App.css';
import TodoFetch from './components/Todo';
import Memo from "./components/Memo";
import React from 'react';
import Callback from './components/Callback';

function App() {
  return (
    <div>
      <TodoFetch />
      <br />
      
      <Memo />
      <br />
      <Callback />
    </div>
  )
}

export default App
