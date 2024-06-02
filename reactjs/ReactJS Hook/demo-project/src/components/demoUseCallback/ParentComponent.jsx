import { useCallback, useState } from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  console.log('ParentComponent');

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // const handleClick = () => {
  //   console.log('callback: ', count);
  //   setCount(count + 1);
  // };

  // const handleClick = useCallback(() => {
  //   console.log('callback: ', count);
  //   setCount(count + 1);
  // }, []);

  const handleClick = useCallback(() => {
    console.log('callback: ', count);
    setCount(count + 1);
  }, [count]);

  const handleClick2 = useCallback(() => {
    console.log('callback1: ', count2);
    setCount2(count2 + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Count: {count2}</p>
      <ChildComponent onClick={handleClick} />
      <button onClick={handleClick2}>Click 2</button>
    </div>
  );
}
