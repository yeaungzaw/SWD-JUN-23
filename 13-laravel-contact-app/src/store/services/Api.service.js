import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT } from "../../lib/contant";

export const ApiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINT,
    prepareHeaders: (headers) => {
      if (localStorage.getItem("auth")) {
        headers.set("authorization", `Bearer ${localStorage.getItem("auth")}`);
      } else {
        headers.delete("authorization");
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
