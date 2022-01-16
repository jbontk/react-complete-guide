import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const cartContext = useContext(CartContext);

  const item = props.item;
  const price = `$${item.price.toFixed(2)}`;

  const addToCartHandler = (quantity) =>
    cartContext.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantity,
    });

  return (
    <li>
      <div className={classes.meal}>
        <h3>{item.name}</h3>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}>{price}</div>
        <div>
          <MealItemForm id={props.id} onAddCartItem={addToCartHandler} />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
