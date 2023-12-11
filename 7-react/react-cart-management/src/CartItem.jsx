import React from "react";

const CartItem = () => {
  return (
    <div className="cart-item group">
      <img
        className="cart-item-img h-16 translate-y-1/2 ml-3 z-10 relative"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt
      />
      <div className="border border-zinc-600 bg-white px-3 py-4 relative">
        <button className="cart-item-del absolute top-3 -right-3 p-1 text-red-500 bg-red-100 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:right-3 group-hover:pointer-events-auto duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
        <h1 className="cart-item-title font-bold line-clamp-1 text-lg mb-2 mt-8">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <div className="flex justify-between">
          <p className="text-zinc-500">
            $<span className="cart-item-cost">109.95</span>
            <span className="cart-item-price hidden">109.95</span>
          </p>
          <div className="flex">
            <button className="active:scale-90 duration-100 cart-item-quantity-decrement bg-zinc-300 w-6 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </button>
            <span className="cart-item-quantity bg-zinc-100 w-8 flex justify-end items-center pr-1">
              1
            </span>
            <button className="active:scale-90 duration-100 cart-item-quantity-increment bg-zinc-300 w-6 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
