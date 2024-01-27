import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import GetProductData from "../../service/product.service";

const DetailProductPage = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const handleBack = () => {
    nav(-1);
  };

  const { loading, data, error } = useFetch(GetProductData, `products/${id}`);

  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            // <div className="pb-5">
            //   <button
            //     className="bg-red-400 text-white px-4 py-2"
            //     onClick={handleBack}
            //   >
            //     Back
            //   </button>
            //   <div>
            //     <img src={data.img} />
            //   </div>
            //   <div>
            //     <h1 className="text-lg font-bold">{data.title}</h1>
            //   </div>
            // </div>
            <div className="h-screen max-w-[1000px] mx-auto flex justify-center gap-10 items-center">
              <div>
                <img className="min-w-[400px]" src={data.img} />
              </div>
              <div className="flex flex-col gap-2">
                <h1>{data.title}</h1>
                <h1 className="text-orange-600 text-lg mb-2">$ 56.20</h1>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have be suffered alteration in
                  some form, by injected humou or randomised words which donot
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum.
                </p>
                <div>
                  <button
                    onClick={handleBack}
                    className="bg-orange-400 text-gray-50 px-4 py-2"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailProductPage;
