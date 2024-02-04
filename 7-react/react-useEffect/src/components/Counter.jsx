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
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">Counter</h1>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={decrement}
          >
            Decrement
          </button>
          <span className="text-2xl font-bold">{count}</span>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={increment}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
