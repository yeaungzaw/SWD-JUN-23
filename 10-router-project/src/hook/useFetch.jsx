import React, { useEffect, useState } from "react";
import { GetBookData } from "../service/book.service";

const useFetch = (fetchFun, arg) => {
  const [fetch, setFetch] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFun(arg);
        setFetch({
          ...fetch,
          loading: false,
          data,
          error: null,
        });
      } catch (e) {
        setFetch({
          ...fetch,
          loading: false,
          data: null,
          error: e.message,
        });
      }
    })();
  }, []);

  return fetch;
};

export default useFetch;
