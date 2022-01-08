import {useState} from 'react';

import classes from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import Modal from '../UI/Modal';
import Cart from '../Cart/Cart';

const Header = () => {

  const [showModal, setShowModal] = useState(false);

  const cartClickHandler = () => setShowModal(true);

  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {!showModal && <HeaderCartButton onClick={cartClickHandler} />}
        {showModal && <Modal title='Your Cart' onClose={closeModalHandler}><Cart /></Modal>}
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Le jeune buffet tuning et aberrant' />
      </div>
    </>
  );
};

export default Header;
