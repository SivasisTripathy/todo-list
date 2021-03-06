import React, { useState, useEffect } from "react"
import './App.css';

//components
import Form from "./components/Form"
import TodoList from "./components/TodoList"

const FormContext = React.createContext();

function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //effects

  //run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  };

  return (
    <FormContext.Provider value={{ inputText, todos, setTodos, setInputText, setStatus, filteredTodos }}>
      <div className="App">
        <header>
          <h1>The Todo List</h1>
        </header>
        <Form />
        <TodoList />
      </div>
    </FormContext.Provider>
  );
}

export { App, FormContext };
