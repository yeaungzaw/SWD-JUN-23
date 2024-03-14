import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const EmptyRow = () => {
  const { toggleCreateDrawer } = useContext(DataContext);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="row-id px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
        colSpan={5}
      >
        There is no Course.{" "}
        <button
          onClick={toggleCreateDrawer}
          className="text-blue-500 underline"
        >
          Create New One
        </button>
      </th>
    </tr>
  );
};

export default EmptyRow;
