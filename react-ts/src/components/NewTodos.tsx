import {FormEvent, useRef} from 'react';

const NewTodo = () => {

  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredText = textRef.current!.value;

    if (!enteredText.trim().length) {
      // throw an error
      return;
    }



  }


  return <form onSubmit={submitHandler}>
    <label htmlFor='text'>Tdo text</label>
    <input type='text' id='text' ref={textRef}/>
    <button>Add Tdo</button>
  </form>;
};

export default NewTodo;
