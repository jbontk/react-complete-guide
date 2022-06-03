import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

const Cart = (props) => {

  const items = useSelector(({cart}) => cart.items);

  let itemsToRender = <p>Your Cart is empty!</p>;

  if (items && Object.keys(items).length > 0) {
    itemsToRender = Object.keys(items).map(id => {

      const {quantity, total, price, title} = items[id];

      return <CartItem key={id} item={{id, quantity, total, price, title}}/>;
    });
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemsToRender}
      </ul>
    </Card>
  );
};

export default Cart;
