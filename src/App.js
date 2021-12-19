import { useState } from 'react';
import Wrapper from './components/Helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => setUsers((prev) => [user, ...prev]);

  return (
    <Wrapper>
      <AddUser onAdd={addUserHandler} />
      <UsersList items={users} />
    </Wrapper>
  );
}

export default App;
