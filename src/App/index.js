import React from 'react';
import { AppUI } from './AppUI';
import {TodoContext , TodoProvider} from '../TodoContext'

// import './App.css';

/*const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el cursso de intro a React', completed: true },
    { text: 'Llorar con la llorona', completed: false },
    { text: 'LALALALAA', completed: false }, 
];*/

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>

  );
}

export default App;
