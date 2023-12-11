import React from "react";

const ListGroup = () => {
  return (
    <div id="taskLists" className="font-body">
      <div className="hidden last:flex flex-col justify-center items-center py-16">
        <img
          className="w-28 mb-3"
          src="../src/img/empty.svg"
          alt=""
        />
        <p className="text-sm text-stone-600">There is no List</p>
      </div>
    </div>
  );
};

export default ListGroup;
