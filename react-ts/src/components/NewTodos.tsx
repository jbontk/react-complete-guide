import React, {FormEvent, useRef} from 'react';

const NewTodo : React.FC<{onAddTodo: (text: string) => void}> = (props) => {

  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredText = textRef.current!.value;

    if (!enteredText.trim().length) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  }


  return <form onSubmit={submitHandler}>
    <label htmlFor='text'>Tdo text</label>
    <input type='text' id='text' ref={textRef}/>
    <button>Add Tdo</button>
  </form>;
};

export default NewTodo;
