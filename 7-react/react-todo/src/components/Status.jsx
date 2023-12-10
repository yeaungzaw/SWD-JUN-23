import React from "react";

const Status = () => {
  return (
      <div className="status-box flex justify-between items-center font-heading mb-5">
        <h3 className="text-2xl font-bold">Your List</h3>
        <p className="bg-black text-sm text-white px-3 py-1 rounded-full">
          Done
          <span id="doneCounter"> 0</span> / <span id="listCounter">0</span>
        </p>
      </div>
  );
};

export default Status;
