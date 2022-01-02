import classes from './MealItem.module.css';

const MealItem = ({ item }) => {

  const price = `$${item.price.toFixed(2)}`;


  return (
    <li>
      <div className={classes.meal}>
        <h3>{item.name}</h3>
        <div className={classes.description}>{item.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </li>
  );
};

export default MealItem;
