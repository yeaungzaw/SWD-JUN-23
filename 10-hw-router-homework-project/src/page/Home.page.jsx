import React from "react";
import { ProductListComponents } from "../components";
import GetProductData from "../service/product.service";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { loading, data, error } = useFetch(GetProductData, "products");

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 container mx-auto">
            {data.map((i) => (
              <Link key={i.id} to={`/detail/${i.id}`}>
                <ProductListComponents data={i} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
