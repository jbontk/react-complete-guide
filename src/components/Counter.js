import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const incrementHandler = () => dispatch(counterActions.increment());
  const increaseBy5Handler = () => dispatch(counterActions.increase(5));
  const decrementHandler = () => dispatch(counterActions.decrement());

  const counterValue = useSelector(({counter}) => counter.counter);
  const showCounter = useSelector(({counter}) => counter.showCounter);

  const toggleCounterHandler = () => dispatch(counterActions.toggleCounter());

  console.log('re-render');

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
