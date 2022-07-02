import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Ingredient } from "../../models/ingredient";

import Card from "../UI/Card";
import "./IngredientForm.css";

type IngredientFormProps = {
  onAddIngredient: (ingredient: Ingredient) => Ingredient[] | void
}

const IngredientForm = React.memo((props: IngredientFormProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!title.trim().length) {
      return;
    }

    const ingredient: Ingredient = new Ingredient(title, amount);
    props.onAddIngredient(ingredient);
  };

  const titleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const amountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.valueAsNumber);

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={titleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={amountChange}
            />
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
