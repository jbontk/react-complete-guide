import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  return (
    <div className="App">
    <Todos items={[new Todo('shave'), new Todo('brush teeth')]} />
    </div>
  );
}

export default App;
