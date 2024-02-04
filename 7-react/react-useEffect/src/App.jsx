import React, { useEffect } from "react";
import Counter from "./components/Counter";
import HideShowComponent from "./components/HideShowComponent";

const App = () => {
  useEffect(() => {
    // console.log("Effect");
  }, []);
  return (
    <div>
      {/* <Counter /> */}
      {/* <HideShowComponent /> */}
    </div>
  );
};

export default App;
