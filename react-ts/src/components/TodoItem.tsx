import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string, onRemoveTodo: () => void}> = (props) => {

  const todoItemClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    props.onRemoveTodo();
  }

  return <li onClick={todoItemClickHandler} className={classes.item}>{props.text}</li>;
};

export default TodoItem;
