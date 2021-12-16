import { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserhandler = (event) => {
    event.preventDefault();
    console.log(enteredUser, enteredAge);
  };

  const usernameChangedHandler = (event) => setEnteredUser(event.target.value);
  const ageChangedHandler = (event) => setEnteredAge(event.target.value);

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserhandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={usernameChangedHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' onChange={ageChangedHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
