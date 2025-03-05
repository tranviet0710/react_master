import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const counterVisibile = useSelector(state => state.counterVisibile);

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 1 })
  }
  const decreaseHandler = () => {
    dispatch({ type: 'decrease', amount: 1 })
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterVisibile && <div className={classes.value}>{counter}</div>}
      <div className={classes.btnContainer}>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
    </main>
  );
};

export default Counter;
