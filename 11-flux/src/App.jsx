import React from "react";
import { useReducer } from "react";

// Action
//      Type - instruction
//      Payload

// increase type
//          payload ပါလား ပါရင် payload
//          မပါရင် +1

const reducer = (store, action) => {
  switch (action.type) {
    case "add": {
      if (action.payload) {
        return (store = store + action.payload);
      } else {
        return (store = store + 1);
      }
    }
    case "remove": {
      return store > 0 ? (store = store - 1) : store;
    }
    case "addWithPayload": {
      return (store = store + action.payload);
    }
    default: {
      return store;
    }
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const handleRemoveBtn = () => {
    dispatch({ type: "remove" });
  };
  const handleAddBtn = () => {
    dispatch({ type: "add", payload: 10 });
  };

  const handleAddWithPayload = () => {
    dispatch({ type: "addWithPayload", payload: 2 });
  };

  return (
    <div className="flex flex-col h-screen gap-4 justify-center items-center">
      <h1 className="text-3xl">{state}</h1>
      <div className="flex gap-2">
        <button
          onClick={handleRemoveBtn}
          className="bg-gray-400 text-2xl text-white px-4 py-2"
        >
          -
        </button>
        <button
          onClick={handleAddBtn}
          className="bg-gray-400 text-2xl text-white px-4 py-2"
        >
          +
        </button>
        <button
          onClick={handleAddWithPayload}
          className="bg-gray-400 text-2xl text-white px-4 py-2"
        >
          ++
        </button>
      </div>
    </div>
  );
};

export default App;
