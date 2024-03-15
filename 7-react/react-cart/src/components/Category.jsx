import React from "react";

const Category = ({ cartName }) => {
  return (
    <button className="name-btn whitespace-nowrap border border-neutral-600 px-4 py-1">
      {cartName}
    </button>
  );
};

export default Category;
