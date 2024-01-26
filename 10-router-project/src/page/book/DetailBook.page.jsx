import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/book.service";

const DetailBookPage = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { loading, data, error } = useFetch(GetBookData, `book/${id}`);

  const handleBack = () => {
    nav(-1);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div className="pb-5">
              <button
                className="bg-red-400 text-white px-4 py-2"
                onClick={handleBack}
              >
                Back
              </button>
              <div>
                <img src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div>
                <h1 className="text-lg font-bold">{data.title}</h1>
                <h2 className="text-sm text-gray-400">{data.author}</h2>
              </div>
              <div>
                <p>{data.description}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
