import React, {useContext} from 'react';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import {TodosContext} from '../store/todos-context';

const Todos: React.FC = () => {

  const {todos, removeTodo} = useContext(TodosContext);

  return <div>
    <ul className={classes.todos}>
      {todos.length === 0 && <p>No Todos Yet!</p>}
      {todos.length > 0 && todos.map(item => <TodoItem key={item.id}
                                                       text={item.text}
                                                       onRemoveTodo={removeTodo.bind(null, item.id)}/>)}
    </ul>
  </div>;
};

export default Todos;
