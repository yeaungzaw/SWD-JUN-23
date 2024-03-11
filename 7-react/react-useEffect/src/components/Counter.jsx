// Counter.js

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={decrement}
      >
        -
      </button>
      <span className="mx-4 text-xl font-bold">{count}</span>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
