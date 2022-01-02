import classes from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => (
  <>
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='Le jeune buffet tuning et aberrant' />
    </div>
  </>
);

export default Header;
