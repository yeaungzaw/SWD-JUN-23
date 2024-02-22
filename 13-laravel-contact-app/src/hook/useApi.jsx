import React from "react";
import { useEffect, useState } from "react";

const useApi = (fun) => {
  const [apiData, setApiData] = useState({
    loading: false,
    error: null,
    data: null,
  });

  const handleDealApi = async (formData) => {
    setApiData((pre) => ({ ...pre, loading: true }));

    const res = await fun(formData);

    if (res.data) {
      setApiData((pre) => ({ ...pre, loading: false, data: res.data }));
    } else {
      setApiData((pre) => ({ ...pre, loading: false, error: res.msg }));
    }
  };

  const { loading, data, error } = apiData;

  return { loading, error, data, handleDealApi };
};

export default useApi;
