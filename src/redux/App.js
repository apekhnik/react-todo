import React from 'react';
import Title from './components/todo-title/Title'
import './App.css';
import ToDo from './containers/todo/todo'
const App = () => {
  return(
    <div className="app-container">
      <div className="app">
      <Title title='ToDo'/>
      <ToDo/>
      </div>
    </div>
  )
}

export default App;
