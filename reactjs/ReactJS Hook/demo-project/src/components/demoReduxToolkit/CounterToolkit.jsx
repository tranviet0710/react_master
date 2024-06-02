// Counter.js
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function CounterToolkit() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* dispatch({type: ""}) */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default CounterToolkit;
