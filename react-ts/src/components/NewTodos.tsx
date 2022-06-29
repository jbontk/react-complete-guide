import React, {FormEvent, useContext, useRef} from 'react';
import classes from './NewTodo.module.css';
import TodosContext from '../store/todos-context';

const NewTodo : React.FC = (props) => {

  const {addTodo} = useContext(TodosContext);

  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredText = textRef.current!.value;

    if (!enteredText.trim().length) {
      // throw an error
      return;
    }

    addTodo(enteredText);
  }


  return <form className={classes.form} onSubmit={submitHandler}>
    <label htmlFor='text'>Tdo text</label>
    <input type='text' id='text' ref={textRef}/>
    <button>Add Tdo</button>
  </form>;
};

export default NewTodo;
