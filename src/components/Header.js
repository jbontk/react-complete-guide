import classes from './Header.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {authenticationActions} from '../store/authentication';

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    const logoutAction = authenticationActions.logout();
    console.log(logoutAction);
    return dispatch(logoutAction);
  };

  const isAuthenticated = useSelector(({authentication}) => authentication.isAuthenticated);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
