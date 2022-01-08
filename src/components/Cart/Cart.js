import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-item']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((i) => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  );

  return (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </>
  );
};

export default Cart;
