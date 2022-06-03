import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {cartActions} from '../../store/cart';

const CartButton = (props) => {
  const items = useSelector(({cart}) => cart.items);
  const numberOfItems = Object.keys(items).length;

  const dispatch = useDispatch();
  const toggleCartHandler = () => dispatch(cartActions.toggleCart());

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
