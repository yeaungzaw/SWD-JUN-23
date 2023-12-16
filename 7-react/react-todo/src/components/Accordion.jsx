import React, { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="border border-gray-400">
      <div
        onClick={handleOpen}
        className="bg-gray-200 p-3 select-none cursor-pointer flex justify-between"
      >
        <h4>This is title</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${!open && "rotate-180"} w-5 h-5 duration-300`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      {open && (
        <div className="p-4 animate__animated animate__fadeIn">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            excepturi quisquam, omnis suscipit totam nesciunt neque voluptate
            voluptatibus alias tenetur, beatae quaerat atque! Saepe ipsa numquam
            nam neque quibusdam id?
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
