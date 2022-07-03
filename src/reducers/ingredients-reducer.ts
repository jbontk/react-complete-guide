import { Ingredient } from "../models/ingredient";

export enum IngredientActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  SET = "SET",
}

const ingredientsReducer = (
  currentIngredients: Ingredient[],
  action: {
    type: IngredientActionType;
    payload: string | Ingredient | Ingredient[];
  }
): Ingredient[] => {
  switch (action.type) {
    case IngredientActionType.ADD:
      const ingredientToAdd = action.payload as Ingredient;
      return [...currentIngredients, ingredientToAdd];
    case IngredientActionType.REMOVE:
      return currentIngredients.filter((i) => i.id !== action.payload);
    case IngredientActionType.SET:
      const newIngredients = action.payload as Ingredient[];
      return newIngredients;
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
};

export default ingredientsReducer;
