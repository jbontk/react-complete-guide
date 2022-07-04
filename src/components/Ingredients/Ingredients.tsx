import { useCallback, useMemo, useReducer } from "react";
import { INGREDIENTS_API, REMOTE_API } from "../..";
import useHttp from "../../hooks/use-http";
import { Ingredient } from "../../models/ingredient";
import { IngredientWithoutId } from "../../models/ingredient-without-id";
import ingredientsReducer, {
  IngredientActionType,
} from "../../reducers/ingredients-reducer";
import ErrorModal from "../UI/ErrorModal";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, ingredientsDispatch] = useReducer(ingredientsReducer, []);
  const {request, httpState, clearError} = useHttp();

  //
  // useCallback is necessary because Search will fetch the ingredients on first load,
  // which will update ingredients
  // which will trigger a re-rendering of this component
  // which will re-create loadIngredients function
  // which will cause Search's effect to rerun since loadIngredients is listed
  // as a dependency
  //
  const loadIngredients = useCallback(
    (ingredients: Ingredient[]) =>
      ingredientsDispatch({
        type: IngredientActionType.SET,
        payload: ingredients,
      }),
    []
  );

  //
  // Add ingredient
  //
  const addIngredient = useCallback(async (ingredient: IngredientWithoutId) => {
    const data = await request(
      "POST",
      INGREDIENTS_API,
      ingredient
    );
    ingredientsDispatch({
      type: IngredientActionType.ADD,
      payload: new Ingredient(data!.name, ingredient.title, ingredient.amount),
    });
  }, [request]);

  //
  // Remove ingredient
  //
  const removeIngredient = useCallback(async (id: string) => {
    await request("DELETE",`${REMOTE_API}/ingredients/${id}.json`);
    ingredientsDispatch({ type: IngredientActionType.REMOVE, payload: id });
  }, [request]);

  console.log("Rendering Ingredients");

  //
  // Alternatively, wrap IngredientList inside React.memo
  // So that it re-renders only when its props change
  // (and not also when its parent re-renders)
  //
  const ingredientList = useMemo(
    () => (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredient}
      />
    ),
    [ingredients, removeIngredient]
  );

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredient}
        isLoading={httpState.isLoading}
      />

      <section>
        <Search onLoadIngredients={loadIngredients} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
