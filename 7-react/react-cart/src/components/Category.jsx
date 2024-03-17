import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const Category = ({ category: { id, name, active }, updateCategories }) => {

  const {setCurrentCategory} = useContext(DataContext)

  const handleBtn = () => {
    updateCategories(id);
    setCurrentCategory(name);
  };

  return (
    <button
      onClick={handleBtn}
      className={`name-btn whitespace-nowrap border border-neutral-600 px-4 py-1 ${
        active && "bg-neutral-600 text-white"
      }`}
    >
      {name}
    </button>
  );
};

export default Category;
