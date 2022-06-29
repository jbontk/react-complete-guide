import React, {createContext, useState} from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  todos: Todo[],
  addTodo: (text: string) => void,
  removeTodo: (id: string) => void
}

export const TodosContext = createContext<TodosContextObj>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {}
});

const TodosContextProvider: React.FC<{children: any}> = ({children}) => {

  const [todos, setTodos] = useState<Todo[]>([new Todo('shave'), new Todo('brush teeth')]);

  const addTodo = (text: string) => {
    setTodos(prev => [...prev, new Todo(text)]);
  };

  const removeTodo = (id: string): void => {
    setTodos(prev => prev.filter(t => t.id !== id));
    return;
  }

  const contextValue: TodosContextObj = {todos, addTodo, removeTodo};

  return <TodosContext.Provider value={contextValue}>
    {children}
  </TodosContext.Provider>
};

export default TodosContextProvider;
