import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase } from "./store/action/counterAction";

const App = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncreaseBtn = () => {
    dispatch(increase());
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleIncreaseBtn}>increase</button>
    </div>
  );
};

export default App;
