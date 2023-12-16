import React, { useState } from "react";

const Checker = () => {
  const [done, setDone] = useState(true);
  console.log(done);
  const handleInput = () => {
    setDone(!done);
  };

  return (
    <div>
      <h1 className="mb-5">Name Input</h1>
      <div className="flex items-center gap-3">
        <input
          checked={done}
          onChange={handleInput}
          type="checkbox"
          className="w-10 h-10"
          id="x"
        />
        <label className="text-2xl select-none cursor-pointer" htmlFor="x">
          Check Me
        </label>
      </div>
    </div>
  );
};

export default Checker;
