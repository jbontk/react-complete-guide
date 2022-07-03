import axios from "axios";
import { useCallback, useReducer, useState } from "react";
import { INGREDIENTS_API, REMOTE_API } from "../..";
import { Ingredient } from "../../models/ingredient";
import { IngredientWithoutId } from "../../models/ingredient-without-id";
import ErrorModal from "../UI/ErrorModal";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

enum ActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  SET = 'SET'
}


const ingredientsReducer = (currentIngredients: Ingredient[], action: {type: ActionType, payload: string | Ingredient | Ingredient[]}): Ingredient[] => {
  switch(action.type) {
    case ActionType.ADD:
      const ingredientToAdd = action.payload as Ingredient;
      return [...currentIngredients, ingredientToAdd];
    case ActionType.REMOVE:
      return currentIngredients.filter(i => i.id !== action.payload);
      case ActionType.SET:
        const newIngredients = action.payload as Ingredient[];
        return newIngredients;
  }
}

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientsReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //
  // useCallback is necessary because Search will fetch the ingredients on first load,
  // which will update ingredients
  // which will trigger a re-rendering of this component
  // which will re-create loadIngredients function
  // which will cause Search's effect to rerun since loadIngredients is listed
  // as a dependency
  //
  const loadIngredients = useCallback(
    (ingredients: Ingredient[]) => dispatch({type: ActionType.SET, payload: ingredients}),
    []
  );

  const addIngredient = async (ingredient: IngredientWithoutId) => {
    setIsLoading(true);
    const { data }: { data: { name: string } } = await axios.post(
      INGREDIENTS_API,
      ingredient
    );
    dispatch({type: ActionType.ADD, payload: new Ingredient(data.name, ingredient.title, ingredient.amount)});
    setIsLoading(false);
  };
  const removeIngredient = async (id: string) => {
    try {
      setIsLoading(true);
      await axios.delete(`${REMOTE_API}/ingredients/${id}.json`);
      dispatch({type: ActionType.REMOVE, payload: id});
      setIsLoading(false);
    } catch (e: any) {
      let errorMessage = "Unknown error";
      e instanceof Error && (errorMessage = e.message);
      setError(errorMessage);
    }
  };

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  };

  console.log(ingredients);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredient} isLoading={isLoading} />

      <section>
        <Search onLoadIngredients={loadIngredients} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredient}
        />
      </section>
    </div>
  );
}

export default Ingredients;
