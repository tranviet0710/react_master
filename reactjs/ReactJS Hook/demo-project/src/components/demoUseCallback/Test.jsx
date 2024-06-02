import React, { useCallback, useState } from 'react';

export default function Test() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    console.log('Count: ' + count);
    setCount(count + 1);
  }, []); // dependency là mảng rỗng

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
