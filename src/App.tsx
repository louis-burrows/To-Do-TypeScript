import * as React from 'react';
import './App.css'
import { useState } from "react";

import ListButton from "./Components/ListButton";
import TextInput from "./Components/TextInput";
import ToDoItem from "./Components/ToDoItem"

const initialtodos: Array<Todo> = [{text: "to do number one", complete: true}, {text: "what;s upppp", complete: false}]

const App = () => {

  const [todos, setCompleted] = useState(initialtodos); 
  
  const toggleTodo: toggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setCompleted(newTodos);
  }



  return (
    <>
    <ListButton text="hello"/>
    <TextInput />
    <p>app works</p>
    <ToDoItem todo={todos[0]} toggleTodo={toggleTodo}/>
    
    </>
  );
}

export default App;
