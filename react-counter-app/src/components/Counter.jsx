import { useState } from 'react';
import '../style.css';
const Counter = () => {
  const [count, setCount] = useState(0);
  const resetCount = 0;

  return (
    <div className="counter">
      <div className="count-box">
        <h1 className="count-number">{count}</h1>
      </div>
      <div className="count-btn">
        <button onClick={() => setCount(count - 1)}>Count decrease</button>
        <button onClick={() => setCount(resetCount)}>Count reset</button>
        <button onClick={() => setCount(count + 1)}>Count Increase</button>
      </div>
    </div>
  );
};

export default Counter;
