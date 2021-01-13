import * as React from 'react';
import './App.css'
import { useState } from "react";

import ListButton from "./Components/ListButton";
import TextInput from "./Components/TextInput";


const App = () => {

  const [colorOfButton, setColor] = useState<string>("red");  

  return (
    <>
    <ListButton text="hello"/>
    <TextInput />
    <p>app works</p>
    </>
  );
}

export default App;
