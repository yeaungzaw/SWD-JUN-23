import React from "react";

const Header = () => {
  return (
    <header className="nav duration-500 fixed w-full z-40 bg-zinc-100 opacity-95 px-5 py-3 mb-6 border-b-2 border-zinc-500">
      <div className="container">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-zinc-800">
                MMS Solutions
              </h1>
              <p className="text-xs sm:text-base text-zinc-500">
                E-commerce App
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-end gap-1">
              <div className="flex gap-1">
                <div
                  id="searchBar"
                  className="-translate-x-[300px] opacity-0 border border-zinc-600 w-36 sm:w-60 h-9 sm:h-11 rounded-lg flex gap-3 px-2"
                >
                  <input
                    id="searchBarInput"
                    type="text"
                    className="focus-within:outline-none bg-transparent w-24 sm:w-36 flex-grow"
                  />
                  <button
                    id="searchBarInputAllClearBtn"
                    className="active:scale-90 text-zinc-900 duration-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  id="searchBtn"
                  className="active:scale-90 duration-100 border border-zinc-600 rounded-lg sm:w-11 sm:h-11 w-9 h-9 flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 stroke-1 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
              <button
                id="cartBtn"
                className="relative active:scale-90 duration-100 border bg-zinc-600 border-zinc-600 rounded-lg sm:w-11 sm:h-11 w-9 h-9 text-zinc-100 flex justify-center items-center animate__animated"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 stroke-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span
                  id="productCardCount"
                  className="cart-item-count absolute w-6 h-6 rounded-full border-2 border-zinc-100 top-0 right-0 translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-xs font-bold bg-orange-500"
                >
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
