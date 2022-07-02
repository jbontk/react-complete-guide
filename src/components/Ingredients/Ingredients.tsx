import React, { useState } from 'react';
import { Ingredient } from '../../models/ingredient';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const addIngredient = (ingredient: Ingredient) => setIngredients(prev => [...prev, ingredient]);
  const removeIngredient = (id: string) => setIngredients(prev => prev.filter(i => i.id !== id));

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredient} />

      <section>
        <Search />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredient} />
      </section>
    </div>
  );
}

export default Ingredients;
