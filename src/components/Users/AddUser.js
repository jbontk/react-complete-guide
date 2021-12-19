import { useState, useRef } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const closeErrorModalHandler = () => setError(null);

  const addUserhandler = (event) => {
    event.preventDefault();
    const enteredNameRef = nameInputRef?.current?.value;
    const enteredAgeRef = ageInputRef?.current?.value;

    if (!enteredNameRef.trim().length || !enteredAgeRef.trim().length) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    if (+enteredAgeRef < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid age',
      });
      return;
    }

    const user = {
      name: enteredNameRef,
      age: enteredAgeRef,
      id: Math.random().toString(),
    };
    props.onAdd(user);

    // Ref vs. State, when to use? If you just want to read a value, use Ref which is lighter

    // It is not usually recommended to change the DOM (here by changing .current.value)
    // Here, it is arguably fine because we are not a creating/removing a DOM element, we are just resetting
    // two inputs elements
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          onClose={closeErrorModalHandler}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
