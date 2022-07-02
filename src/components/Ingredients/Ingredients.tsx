import axios from "axios";
import React, { useEffect, useState } from "react";
import { INGREDIENTS_API, REMOTE_API } from "../..";
import { Ingredient } from "../../models/ingredient";
import { IngredientWithoutId } from "../../models/ingredient-without-id";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    axios
      .get<{ [k: string]: { title: string; amount: number } }>(INGREDIENTS_API)
      .then(({ data }) => {
        const ingredientsArray = Object.keys(data).map(
          (k) => new Ingredient(k, data[k].title, data[k].amount)
        );
        setIngredients(ingredientsArray);
      });
  }, []);

  const addIngredient = async (ingredient: IngredientWithoutId) => {
    const { data }: { data: { name: string } } = await axios.post(
      INGREDIENTS_API,
      ingredient
    );
    setIngredients((prev) => [
      ...prev,
      new Ingredient(data.name, ingredient.title, ingredient.amount),
    ]);
  };
  const removeIngredient = async (id: string) => {
    await axios.delete(`${REMOTE_API}/ingredients/${id}.json`);
    setIngredients((prev) => prev.filter((i) => i.id !== id));
  };

  console.log(ingredients);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredient} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredient}
        />
      </section>
    </div>
  );
}

export default Ingredients;
