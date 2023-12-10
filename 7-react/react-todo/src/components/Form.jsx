import React from "react";

const Form = () => {
  return (
    <div className="">
      <div className="add-new-list border flex mb-10">
        <input
          id="textInput"
          className="flex-grow border-2 border-black px-3 focus-visible:outline-none"
          type="text"
        />
        <button id="addBtn" className="bg-black text-white p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 pointer-events-none"
          >
            <path
              stroke-linecap="round"
              strokeLineJoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Form;
