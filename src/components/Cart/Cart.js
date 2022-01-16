import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  
  const cartItemAddHandler = (item) => cartContext.addItem({...item, quantity: 1});
  const cartItemRemoveHandler = (id) => cartContext.removeItem(id, 1);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {Object.values(cartContext.items)?.map((i) => (
        <CartItem key={i.id} {...i} onAdd={cartItemAddHandler.bind(null, i)} onRemove={cartItemRemoveHandler.bind(null, i.id)} />
      ))}
    </ul>
  );

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.numberOfItems > 0;

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
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
