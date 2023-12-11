import React from "react";
import CategoryBtn from "./CategoryBtn";

const CategoryLists = () => {
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <section className="category-lists px-5 py-4">
      <div className="container">
        <h1 className="mb-3 text-lg">Product Categories</h1>
        <div
          id="categoryLists"
          className="flex gap-3 overflow-x-scroll sm:overflow-x-hidden scroll-bar--hidden"
        >
          <button className="category-list rounded-lg px-4 py-1 border whitespace-nowrap border-zinc-600">
            All
          </button>
          {categories.map((category, index) => (
            <CategoryBtn key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryLists;
