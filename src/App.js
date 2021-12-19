import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => setUsers((prev) => [user, ...prev]);

  return (
    <>
      {/* <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small> */}
      <AddUser onAdd={addUserHandler} />
      <UsersList items={users} />
    </>
  );
}

export default App;
