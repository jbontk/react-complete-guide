import axios from "axios";
import { useCallback, useReducer } from "react";
import { INGREDIENTS_API, REMOTE_API } from "../..";
import { Ingredient } from "../../models/ingredient";
import { IngredientWithoutId } from "../../models/ingredient-without-id";
import httpStateReducer, { HttpActionType } from "../../reducers/http-state-reducer";
import ingredientsReducer, { IngredientActionType } from "../../reducers/ingredients-reducer";
import ErrorModal from "../UI/ErrorModal";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, ingredientsDispatch] = useReducer(ingredientsReducer, []);
  const [httpState, httpStateDispatch] = useReducer(httpStateReducer, {isLoading: false, error: null});

  //
  // useCallback is necessary because Search will fetch the ingredients on first load,
  // which will update ingredients
  // which will trigger a re-rendering of this component
  // which will re-create loadIngredients function
  // which will cause Search's effect to rerun since loadIngredients is listed
  // as a dependency
  //
  const loadIngredients = useCallback(
    (ingredients: Ingredient[]) => ingredientsDispatch({type: IngredientActionType.SET, payload: ingredients}),
    []
  );

  const addIngredient = async (ingredient: IngredientWithoutId) => {
    httpStateDispatch({type: HttpActionType.SEND});
    const { data }: { data: { name: string } } = await axios.post(
      INGREDIENTS_API,
      ingredient
    );
    ingredientsDispatch({type: IngredientActionType.ADD, payload: new Ingredient(data.name, ingredient.title, ingredient.amount)});
    httpStateDispatch({type: HttpActionType.RESPONSE});
  };
  const removeIngredient = async (id: string) => {
    try {
      httpStateDispatch({type: HttpActionType.SEND});
      await axios.delete(`${REMOTE_API}/ingredients/${id}.json`);
      ingredientsDispatch({type: IngredientActionType.REMOVE, payload: id});
      httpStateDispatch({type: HttpActionType.RESPONSE});
    } catch (e: any) {
      let errorMessage = "Unknown error";
      e instanceof Error && (errorMessage = e.message);
      httpStateDispatch({type: HttpActionType.ERROR, payload: errorMessage});
    }
  };

  const clearError = () => {
    httpStateDispatch({type: HttpActionType.CLEAR});
  };

  console.log(ingredients);

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredient} isLoading={httpState.isLoading} />

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
