import React, { useEffect, useState } from "react";
import Container from "./Container";
import { categoryApi } from "../api/category";
import Category from "./Category";

const CategoryGroup = () => {
  const [categories, setCategories] = useState([]);
  const [ready, setReady] = useState(false);
  const updateCategories = (id) => {
    setCategories(
      categories.map((category) =>
        category.id === id
          ? { ...category, active: true }
          : { ...category, active: false }
      )
    );
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await categoryApi.get("/");
      setCategories(res.data);
      setReady(true);
    };

    fetchCategory();
  }, []);

  return (
    <section className="category-list mb-10 py-3">
      <Container>
        <p className="font-heading mb-2">Select Categories</p>
        <div
          id="categoryList"
          className="flex gap-3 select-none overflow-scroll"
        >
          {!ready && (
            <div className="flex gap-3 animate-pulse">
              <button className="border border-neutral-200 px-4 py-1 flex items-center">
                <span className="inline-block bg-neutral-200 w-24 h-4" />
              </button>
              <button className="border border-neutral-200 px-4 py-1 flex items-center">
                <span className="inline-block bg-neutral-200 w-24 h-4" />
              </button>
              <button className="border border-neutral-200 px-4 py-1 flex items-center">
                <span className="inline-block bg-neutral-200 w-24 h-4" />
              </button>
            </div>
          )}

          {ready &&
            categories.map((category) => (
              <Category
                key={category.id}
                category={category}
                updateCategories={updateCategories}
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryGroup;
