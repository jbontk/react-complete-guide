import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [isQuantityValid, setQuantityIsValid] = useState(true);
  const quantityInputRef = useRef(1);

  const submitHandler = (e) => {
    e.preventDefault();

    const quantity = quantityInputRef?.current?.value;
    const quantityAsNumber = +quantity;

    // input check
    if (quantity.trim().length === 0 || quantityAsNumber < 1 || quantityAsNumber > 5) {
      setQuantityIsValid(false);
      return;
    }

    setQuantityIsValid(true);
    props.onAddCartItem(quantityAsNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Quantity'
        ref={quantityInputRef}
        input={{
          id: `quantity_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!isQuantityValid && <p>Please enter a valid quantity (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
