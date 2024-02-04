import React, { useContext } from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";
import { BookListComponents } from "../components";
import { Link } from "react-router-dom";
import ApiContextProvider, { ApiContext } from "../store/ApiContext";

const HomePage = () => {
  const { data, loading, error } = useContext(ApiContext);
  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="grid grid-cols-4 gap-4 py-6">
          {data.map((i) => (
            <Link key={i.id} to={`/detail/${i.slug}`}>
              <BookListComponents data={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
