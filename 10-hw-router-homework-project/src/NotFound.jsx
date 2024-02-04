import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 h-screen justify-center items-center">
      <img className="w-[400px]" src="./notFound.svg" />
      <p className="text-2xl text-[#6C63FF]">NotFound</p>
    </div>
  );
};

export default NotFound;
