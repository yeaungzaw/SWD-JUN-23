import React from "react";

const ProductCard = ({ title, description, image, rate, count, price }) => {
  return (
    <div className="product-card group">
      <img
        className="product-card-img group-hover:-rotate-6 group-hover:scale-110 duration-300 h-32 -mb-14 ml-5"
        src={image}
      />
      <div className="border border-zinc-600 border-opacity-30 hover:shadow-2xl hover:border-opacity-100 duration-300 rounded-lg p-5">
        <h1 className="product-card-title font-bold line-clamp-1 text-zinc-800 text-xl mb-4 mt-12">
          {title}
        </h1>
        <p className="product-card-description text-sm text-zinc-500 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex justify-between border-b pb-3 border-zinc-600">
          <div className="product-card-rating-stars flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-orange-500 star"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </div>
          <p className="product-card-rating-text text-zinc-700">
            ({rate} / {count})
          </p>
        </div>
        <p className="text-xl font-bold py-3 text-zinc-800">
          $<span className="product-price">{price}</span>
        </p>
        <button className="add-to-cart active:scale-90 duration-100 text-lg w-full border border-zinc-600 text-zinc-700 py-3">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
