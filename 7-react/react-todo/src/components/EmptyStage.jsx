import React from "react";

const EmptyStage = () => {
  return (
    <div className="hidden last:flex flex-col justify-center items-center py-16">
      <img className="w-28 mb-3" src="../src/img/empty.svg" />
      <p className="text-sm text-stone-600">There is no List</p>
    </div>
  );
};

export default EmptyStage;
