import React from "react";
import { useDispatch } from "react-redux";
import ComponentThree from "./ComponentThree";
import { increase, increaseWithPayload } from "../store/reducer/counter.slice";

const ComponentTwo = () => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleIncreaseWithPayload = () => {
    dispatch(increaseWithPayload(2));
  };

  return (
    <div>
      <button className="p-2 bg-blue-200 m-5" onClick={handleIncrease}>
        Increase
      </button>
      <button
        className="p-2 bg-yellow-200 m-5"
        onClick={handleIncreaseWithPayload}
      >
        Increase With Payload
      </button>
      <ComponentThree />
    </div>
  );
};

export default ComponentTwo;
