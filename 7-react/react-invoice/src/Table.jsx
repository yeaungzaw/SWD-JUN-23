import React from "react";

const Table = () => {
  return (
    <div>
      <table className="w-full mb-5">
        <thead className="bg-neutral-600 text-white">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3 text-start w-52">Product</th>
            <th className="p-3 text-end">Price</th>
            <th className="p-3 text-end">Quantity</th>
            <th className="p-3 text-end">Cost</th>
          </tr>
        </thead>
        <tbody id="recordList">
          <tr className="hidden last:table-row">
            <td className="text-center p-3" colSpan={5}>
              There is no record
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td className="p-3 bg-neutral-300 text-end" colSpan={4}>
              Total
            </td>
            <td id="costTotal" className="p-3 text-end bg-neutral-300">
              0
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
