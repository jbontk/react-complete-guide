import { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const closeErrorModalHandler = () => setModalVisible(false);

  const addUserhandler = (event) => {
    event.preventDefault();
    if (
      enteredUser.trim().length &&
      enteredAge.trim().length &&
      +enteredAge > 0
    ) {
      const user = {
        name: enteredUser,
        age: enteredAge,
        id: Math.random().toString(),
      };
      props.onAdd(user);
      setEnteredUser('');
      setEnteredAge('');
    } else {
      setModalVisible(true);
    }
  };

  const usernameChangedHandler = (event) => setEnteredUser(event.target.value);
  const ageChangedHandler = (event) => setEnteredAge(event.target.value);

  return (
    <>
      {modalVisible && (
        <ErrorModal
          title={'Invalid User!'}
          onClose={closeErrorModalHandler}
          message={'Username must not be empty and Age must be greater than zero'}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserhandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={enteredUser}
            onChange={usernameChangedHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={ageChangedHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
