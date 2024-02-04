import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiContext } from "../../store/ApiContext";

const DetailBookPage = () => {
  const { slug } = useParams();
  const nav = useNavigate();
  const { data, loading, error } = useContext(ApiContext);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const finder = data?.find((i) => i.slug === slug);
    setItem(finder);
  }, [data, slug]);

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
            <h1>{error}</h1>
          ) : (
            <div>
              <div>
                <img src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              <div className="p-3">
                <h1 className="text-lg font-bold">{item?.title}</h1>
                <h2 className="text-sm text-gray-400">{item?.author}</h2>
              </div>
              <div className="p-3 text-sm">
                <p>{item?.description}</p>
              </div>
              <button
                onClick={handleBack}
                className="bg-red-500 text-white px-4 py-2 my-4"
              >
                Back
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
