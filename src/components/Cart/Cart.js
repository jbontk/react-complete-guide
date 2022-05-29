import {useContext, useState} from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import actionAndButtonClasses from '../UI/ActionButton.module.css';
import CartContext from '../../store/cart-context';
import Checkout from "./Checkout";
import {ORDERS_API} from "../../Constants";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const submitOrderHandler = (userData) => {
    fetch(ORDERS_API, {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items
      })
    })
  }

  const modalActions = <div className={actionAndButtonClasses.actions}>
    <button className={actionAndButtonClasses['button--alt']} onClick={props.onClose}>
      Close
    </button>
    {hasItems && <button className={actionAndButtonClasses.button} onClick={checkoutHandler}>Order</button>}
  </div>;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler}/>}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
