import { useContext, useRef } from 'react';
import CartContext from '../../../store/cart-context';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const cartContext = useContext(CartContext);
  const quantityInputRef = useRef(1);

  const submitHandler = (e) => {
    e.preventDefault();
    const quantity = quantityInputRef?.current?.value;
    const quantityAsNumber = +quantity;

    // input check
    if (quantity.trim().length === 0 || quantityAsNumber < 1 || quantityAsNumber > 5) {
      return;
    }

    cartContext.addItem(props.item, quantityAsNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        ref={quantityInputRef}
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
