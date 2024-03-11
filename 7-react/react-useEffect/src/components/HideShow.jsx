// HideShow.js

import React, { useState } from "react";
import Content from "./Content";

const HideShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="mt-8">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={toggleVisibility}
      >
        Toggle Visibility
      </button>

      {isVisible && <Content />}
    </div>
  );
};

export default HideShow;
