import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const addUserhandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserhandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' />
        <button>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
