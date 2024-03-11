import React from "react";

const List = ({ course: { id, title, fee, status, student_count } }) => {
  return (
    <div className="border-2 p-5 mb-3 flex">
      <div>
        <p>
          {title} ({fee})
        </p>
      </div>
    </div>
  );
};

export default List;
