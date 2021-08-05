import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  // State Stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Use Effect
  useEffect(()=> {
    filterHandler();
  },[todos,status]);
  
  // Functions
  const filterHandler = ()=> {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.complated === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.complated === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
