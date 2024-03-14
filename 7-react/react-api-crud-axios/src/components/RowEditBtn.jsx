import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { baseUrl } from "../config/config";
import axios from "axios";
import { courseApi } from "../api/course";

const RowEditBtn = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toggleEditDrawer, setEditCourse } = useContext(DataContext);

  const handleBtn = async () => {
    setIsLoading(true);

    const res = await courseApi.get(`/courses/${id}`);
    setIsLoading(false);
    setEditCourse(res.data);
    toggleEditDrawer();
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleBtn}
      type="button"
      className="row-edit text-blue-700 border border-blue-500 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 disabled:opacity-50 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 pointer-events-none group-disabled:hidden inline"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 animate-spin group-disabled:flex hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
      <span className="sr-only">Icon description</span>
    </button>
  );
};

export default RowEditBtn;
