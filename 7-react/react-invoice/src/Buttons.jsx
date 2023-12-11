import React from "react";

const Buttons = () => {
  return (
    <div>
      <div className="flex print:hidden justify-end gap-3">
        <button
          id="manageProduct"
          className="border border-neutral-600 text-neutral-600 px-3 py-2"
        >
          Manage Service
        </button>
        <button
          className="border border-neutral-600 bg-neutral-600 text-white px-3 py-2"
          id="print"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default Buttons;
