import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  const { numberOfItems } = cartContext;
  useEffect(() => {
    if (!numberOfItems) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [numberOfItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
