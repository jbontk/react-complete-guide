import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const item = props.item;
  const price = `$${item.price.toFixed(2)}`;

  return (
    <li>
      <div className={classes.meal}>
        <h3>{item.name}</h3>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}>{price}</div>
        <div>
          <MealItemForm id={props.id} item={props.item} />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
