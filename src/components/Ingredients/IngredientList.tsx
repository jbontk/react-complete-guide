import './IngredientList.css';

export type IngredientWithoutId = {
  title: string,
  amount: number
}

export type Ingredient = IngredientWithoutId&{
  id: string
}

type IngredientListProps = {
  ingredients: Ingredient[],
  onRemoveItem: (id: string) => {}
}

const IngredientList = (props: IngredientListProps) => {
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
