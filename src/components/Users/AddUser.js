import { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserhandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length && enteredAge.trim().length && +enteredAge > 0) {
      const user = {name: enteredUser, age: enteredAge, id: Math.random().toString()};
      props.onAdd(user);
      setEnteredUser('');
      setEnteredAge('');
    }
    else {
      props.onError();
    }
  };

  const usernameChangedHandler = (event) => setEnteredUser(event.target.value);
  const ageChangedHandler = (event) => setEnteredAge(event.target.value);

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserhandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={enteredUser} onChange={usernameChangedHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' value={enteredAge} onChange={ageChangedHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
