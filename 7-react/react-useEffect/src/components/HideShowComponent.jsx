// HideShowComponent.js
import React, { useState } from "react";
import Content from "./Content";

const HideShowComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">Hide/Show Component</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={toggleVisibility}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <Content />}
      </div>
    </div>
  );
};

export default HideShowComponent;
