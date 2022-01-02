import classes from './MealItem.module.css';

const MealItem = ({item}) => (
  <div className={classes.meal}>
    <h3>{item.name}</h3>
    <span className={classes.description}>{item.description}</span>
    <span className={classes.price}>{item.price}</span>
  </div>
);

export default MealItem;
