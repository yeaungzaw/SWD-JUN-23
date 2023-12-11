import React from "react";

const ManageProductBox = () => {
  return (
    <div
      id="manageProductBox"
      className="fixed w-96 h-screen bg-white shadow-lg top-0 right-0 z-50 translate-x-0"
    >
      <div className="flex justify-between p-3">
        <p className="text-3xl font-heading font-bold">Manage Service</p>
        <button
          id="closeManageProductBox"
          className="border border-neutral-500 p-2"
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
      <div id="serviceList" className="p-3" />
      <form id="addService" action>
        <div className="grid grid-cols-3 p-3 gap-3">
          <input
            className="col-span-3 py-2 px-3 border-2 border-neutral-500 w-full"
            type="text"
            placeholder="New Service Name"
            name="service_name"
            required
          />
          <input
            className="col-span-2 py-2 px-3 border-2 border-neutral-500 w-full"
            type="number"
            placeholder="Service Price"
            name="service_price"
            required
          />
          <button className="col-span-1 py-2 px-3 w-full border-2 border-neutral-500 bg-neutral-500 text-white">
            Add New
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageProductBox;
