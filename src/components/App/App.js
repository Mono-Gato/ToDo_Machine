//import './App.css';
import React from "react";
import "./App.css"
import { TodoProvider } from "../../context/TodoContext";
import { AppUI } from "./AppUI";


/*const defaultTodos = [
  {
    text: 'Cortar cebolla', 
    completed: false
  },
  {
    text: 'Tomar el curso de intro react', 
    completed: true
  },
  {
    text: 'Llorar con la llorona mientras divisamos las puertas del infierno', 
    completed: false
  }
]*/

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}

export default App;
