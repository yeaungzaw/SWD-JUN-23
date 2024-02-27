import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT } from "../../lib/contant";

export const ApiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINT,
  }),
  endpoints: (builder) => ({}),
});
