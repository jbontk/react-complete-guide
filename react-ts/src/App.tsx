import React, {useState} from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodos';

function App() {

  const [todos, setTodos] = useState<Todo[]>([new Todo('shave'), new Todo('brush teeth')]);

  const addTodoHandler = (text: string) => {
    setTodos(prev => [...prev, new Todo(text)]);
  };

  const removeTodoHandler = (id: string): void => {
    setTodos(prev => prev.filter(t => t.id !== id));
    return;
  }

  console.log(todos);

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
    <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
