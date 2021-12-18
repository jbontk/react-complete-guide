import { useState } from 'react';
import ErrorModal from './components/UI/ErrorModal';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addUserHandler = (user) => setUsers((prev) => [user, ...prev]);

  const showErrorModalHandler = () => setModalVisible(true);
  const closeErrorModalHandler = () => setModalVisible(false);

  return (
    <div>
      <AddUser onAdd={addUserHandler} onError={showErrorModalHandler} />
      <UsersList items={users} />
      {modalVisible && (
        <ErrorModal header={'Invalid User!'} onClose={closeErrorModalHandler}>
          Username must not be empty and Age must be greater than zero
        </ErrorModal>
      )}
    </div>
  );
}

export default App;
