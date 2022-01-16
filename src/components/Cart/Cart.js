import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {Object.values(cartContext.items)?.map((i) => (
        <li key={i.id}>{i.name} ({i.quantity})</li>
      ))}
    </ul>
  );

  const totalAmount = Number(cartContext.totalAmount).toFixed(2);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
