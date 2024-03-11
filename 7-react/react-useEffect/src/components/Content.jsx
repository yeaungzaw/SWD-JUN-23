import React, { useEffect, useState } from "react";

const Content = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // effect body
    console.log("Content mounted");

    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    const runner = setInterval(() => {
      console.log("Random ", Math.random());
    }, 3000);

    return () => {
      // cleanup fun
      console.log("Content Unmounted");
      clearInterval(runner);
    };
  }, [count]);

  return (
    <div className="mt-4 p-4 bg-gray-200 rounded">
      <p className="text-lg">Content to be hidden or shown.</p>

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
    </div>
  );
};

export default Content;
