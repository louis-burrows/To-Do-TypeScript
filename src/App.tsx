import * as React from 'react';
import './App.css'
import { useState } from "react";

import ListButton from "./Components/ListButton";
import TextInput from "./Components/TextInput";
import ToDoItem from "./Components/ToDoItem"

const initialtodos: Array<Todo> = [{text: "to do number one", complete: true}, {text: "what;s upppp", complete: false}]

const App = () => {

  const [todos, setCompleted] = useState(initialtodos);  

  return (
    <>
    <ListButton text="hello"/>
    <TextInput />
    <p>app works</p>
    <ToDoItem todo={todos[0]} />
    <ToDoItem todo={todos[1]} />
    </>
  );
}

export default App;
