import React from "react";

const CartBox = () => {
  return (
    <div>
      <div
        id="cartBox"
        className="translate-x-0 fixed bg-white w-96 h-screen right-0 top-0 z-50 border-l-2 border-zinc-600 flex flex-col"
      >
        <div className="cart-header border-b-2 px-5 py-3 border-zinc-600">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Your Items</h1>
              <p className="text-zinc-500">
                E-commerce
                <span
                  id="cartItemCount"
                  className="bg-orange-500 text-white w-6 h-6 text-xs font-bold py-1 px-2 rounded-md"
                >
                  0
                </span>
              </p>
            </div>
            <button
              className="active:scale-90 duration-100 rounded-lg border border-zinc-600 w-9 h-9 sm:h-11 sm:w-11 flex justify-center items-center"
              id="cartCloseBtn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="cartBody"
          className="px-5 pb-10 flex flex-col flex-grow overflow-y-scroll"
        >
          <div className="cart-empty-stage m-auto flex-col justify-center items-center hidden last:flex">
            <img className="w-72" src="../src/img/empty-cart.svg" />
            <p className="text-center text-zinc-600">
              There is no item in cart
            </p>
          </div>
        </div>
        <div className="cart-footer mt-auto">
          <div className="border-t-2 border-zinc-600">
            <div className="py-2 px-3">
              <div className="text-right pr-2 mb-2">
                <p className="text-zinc-500 text-lg">Total Amount</p>
                <h1 className="text-2xl font-bold">
                  $<span id="totalAmount">0.00</span>
                </h1>
              </div>
              <div className="flex justify-center">
                <button className="text-lg bg-zinc-600 text-white w-full py-3 rounded-sm">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
