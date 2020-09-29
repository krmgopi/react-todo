import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import './App.css';
import TodoList from './components/TodoList';

function App() {

const [inputText, setInputText] = useState("");
const [todos, setTodos] = useState([]);
const [status, setStatus] = useState("all");
const [filterTodos, setFilteredTodos] = useState([]);


// useEffect

useEffect(() => {
  getLocalTodos();
}, []);

useEffect(() => {
  filterHandler();
  saveLocalTodos();
}, [todos, status])

// Filter Function to filter todos based on complete and incomplete
const filterHandler = () => {
  switch(status){
    case "completed" :
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      break;

    case "uncompleted" :
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
      break;

    default:
      setFilteredTodos(todos);
      break;
  }
}

const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]));
  }
  else{
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }
}

  return (
    <div className="App">
     <header>
      <h1>TO DO LIST APP IN REACT</h1>
     </header>
     <Form 
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText = {setInputText}
        setStatus = {setStatus} 
      />
     <TodoList
        setTodos={setTodos}
        todos={todos}
        filterTodos = {filterTodos}
      />
    </div>
  );
}

export default App;
