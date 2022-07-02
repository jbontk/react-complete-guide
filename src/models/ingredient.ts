import { IngredientWithoutId } from "./ingredient-without-id";

export class Ingredient extends IngredientWithoutId {
  constructor(public id: string, public title: string, public amount: number) {
    super(title, amount);
  }
}
