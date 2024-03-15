import React from "react";

const ProductLoader = () => {
  return (
    <div className="animate-pulse">
      <div className="w-36 h-32 bg-neutral-200 -mb-16 ml-5" />
      <div className="border border-neutral-200 p-5">
        <div className="mb-4 mt-14 bg-neutral-200 h-4 w-3/4 rounded" />
        <div className="mb-2 bg-neutral-200 h-2 rounded" />
        <div className="mb-2 bg-neutral-200 h-2 rounded" />
        <div className="mb-4 bg-neutral-200 h-2 rounded" />
        <div className="flex justify-between items-center mb-2">
          <div className="bg-neutral-200 h-4 w-1/2 rounded" />
          <div className="bg-neutral-200 h-4 w-1/4 rounded" />
        </div>
        <hr className="my-3" />
        <div className="mb-3 bg-neutral-200 h-4 w-2/5 rounded" />
        <div className="bg-neutral-200 w-full h-6 rounded" />
      </div>
    </div>
  );
};

export default ProductLoader;
