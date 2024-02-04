import React, { useEffect, useState } from "react";

const Content = () => {
  const [count, setCount] = useState(0);

  console.log("update", count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // effect body
    console.log("Content Mounted");

    return () => {
      // clean up function
      console.log("Content Unmounted");
    };
  }, [count]);

  return (
    <div>
      <div className="mt-4">
        <p className="text-lg">This is the content to hide/show.</p>
      </div>
      <div className="mt-4 flex items-center space-x-4">
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
  );
};

export default Content;
