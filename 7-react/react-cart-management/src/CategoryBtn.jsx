import React from "react";

const CategoryBtn = ({category}) => {
  return (
    <div>
      <button className="category-list rounded-lg px-4 py-1 border whitespace-nowrap border-zinc-600">
        {category}
      </button>
    </div>
  );
};

export default CategoryBtn;
