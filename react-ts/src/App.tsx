import React, {useState} from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodos';
import TodosContext from './store/todos-context';

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
    <TodosContext.Provider value={{
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
    }}>
      <div className="App">
        <NewTodo />
        <Todos />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
