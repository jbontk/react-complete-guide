import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import commonClasses from '../UI/Common.module.css';
import useHttp from "../../hooks/use-http";
import {useEffect, useState} from "react";
import {MEALS_API} from "../../Constants";

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (mealsObj) => {
      const loadedMeals = Object.keys(mealsObj).map(k => mealsObj[k]);

      setMeals(loadedMeals);
    };

    fetchMeals({ url: MEALS_API }, transformMeals);
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {error && <p className={commonClasses.error}>An error occurred while fetching meals: {error || 'unknown error'}</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
