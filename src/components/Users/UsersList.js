import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = ({ items }) => {
  let content = (
    <ul>
      {items.map((u) => (
        <li key={u.id}>{`${u.name} (${u.age} years old)`}</li>
      ))}
    </ul>
  );
  if (!items?.length) content = <span>No users yet!</span>;

  return <Card className={classes.users}>{content}</Card>;
};

export default UsersList;
