import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => <header className={classes.header}>
  <nav className={classes.nav}>
    <ul>
      <li><NavLink to='/quotes'>Quotes</NavLink></li>
      <li><NavLink to='/new-quote'>New Quote</NavLink></li>
    </ul>
  </nav>
</header>;

export default MainNavigation;