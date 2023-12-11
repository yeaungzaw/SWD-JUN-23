import React from "react";

const Course = ({ title, studentCount }) => {
  const borderBgClass =
    studentCount === 0 ? "border-red-400 bg-red-100" : "bg-gray-100";

  return (
    studentCount > 0 && (
      <div className={` border-s-4 ${borderBgClass} mb-3 p-3 flex gap-2`}>
        <p>{studentCount}</p>
        <p>{title}</p>
      </div>
    )
  );
};

export default Course;
