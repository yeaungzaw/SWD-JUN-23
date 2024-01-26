import React from "react";

const BookListComponents = ({ data }) => {
  return (
    <div className="border h-full">
      <div>
        <img src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className="p-3">
        <h1 className="text-lg font-bold">{data.title}</h1>
        <h2 className="text-sm text-gray-400">{data.author}</h2>
      </div>
      <div className="p-3 text-sm">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default BookListComponents;
