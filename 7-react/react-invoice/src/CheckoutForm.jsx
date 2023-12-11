import React from "react";

const CheckoutForm = () => {
  return (
    <div>
      <form id="addRecord" className="mb-5 print:hidden" action>
        <div className="grid gap-3 grid-cols-3">
          <select
            className="col-span-3 md:col-span-1 border border-neutral-600 w-full block p-3"
            name="product_id"
            id
            required
          >
            <option value>Select Service</option>
          </select>
          <input
            className="col-span-2 md:col-span-1 border border-neutral-600 w-full block p-3"
            type="number"
            name="quantity"
            placeholder="Quantity"
            required
          />
          <button className="border border-neutral-600 bg-neutral-600 text-white w-full block p-3">
            Add Record
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
