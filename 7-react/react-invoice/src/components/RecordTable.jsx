import React from "react";
import RecordGroup from "./RecordGroup";
import EmptyStage from "./EmptyStage";
import Record from "./Record";

const RecordTable = ({ records, removeRecord }) => {
  return (
    <section>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr className=" ">
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Product name
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Quantity
              </th>
              <th scope="col" className="px-6 py-4 text-end">
                Cost
              </th>
            </tr>
          </thead>
          <tbody id="recordGroup">
            <RecordGroup records={records} removeRecord={removeRecord} />
          </tbody>
          <tfoot>
            <tr className="border-b">
              <td className="px-6 py-4 text-center" colSpan={4}>
                Total
              </td>
              <td className="px-6 py-4 text-end" id="recordTotal">
                {records.reduce((pv, cv) => pv + cv.cost, 0).toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="hidden mt-0 print:block print:mt-10">
        <p className="font-bold">ဝယ်ယူအားပေးမူ့ကို ကျေးဇူး အထူးတင်ရှိပါသည်။</p>
        <p className="text-gray-600">နောက်လည်း လာအားပေးပါခင်ဗျာ။</p>
      </div>
    </section>
  );
};

export default RecordTable;
