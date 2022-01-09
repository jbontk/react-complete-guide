import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const cartContext = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const quantity = undefined;
    cartContext.addItem(props.item, quantity);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        input={{
          id: `amount_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
