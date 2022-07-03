import React from 'react';
import { Ingredient } from '../../models/ingredient';
import './IngredientList.css';

type IngredientListProps = {
  ingredients: Ingredient[],
  onRemoveItem: (id: string) => Promise<void>
}

const IngredientList = (props: IngredientListProps) => {
  console.log('Rendering IngredientList');
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map(ig => (
          <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
