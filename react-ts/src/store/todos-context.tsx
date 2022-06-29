import {createContext} from 'react';
import Todo from '../models/todo';

const TodosContext = createContext<{
  items: Todo[],
  addTodo: (text: string) => void,
  removeTodo: (id: string) => void
}>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {}
});

export default TodosContext;
