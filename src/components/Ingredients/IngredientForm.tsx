import React, {ChangeEvent, SyntheticEvent, useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import {IngredientWithoutId} from './IngredientList';

const IngredientForm = React.memo(() => {
  const [inputState, setInputState] = useState<IngredientWithoutId>({title: '', amount: 0});

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    // ...
  };

  const titleChange = (e: ChangeEvent<HTMLInputElement>) => setInputState(prev => ({
    title: e.target.value,
    amount: prev.amount
  }));
  const amountChange = (e: ChangeEvent<HTMLInputElement>) => setInputState(prev => ({
    title: prev.title,
    amount: e.target.valueAsNumber
  }));

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={inputState.title}
                   onChange={titleChange}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={inputState.amount}
                   onChange={amountChange}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
