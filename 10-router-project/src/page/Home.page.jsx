import React from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";
import { BookListComponents } from "../components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data, loading, error } = useFetch(GetBookData, "book");
  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="grid grid-cols-4 gap-4 py-6">
          {data.map((i) => (
            <Link key={i.id} to={`/detail/${i.id}`}>
              <BookListComponents data={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
