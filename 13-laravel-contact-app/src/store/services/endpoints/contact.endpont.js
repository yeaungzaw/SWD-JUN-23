import { ApiService } from "../Api.service";

const contactEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => `/contact`,
    }),
  }),
});

export const { useGetContactQuery } = contactEndpoint;

/*
query => get
mutate => put, patch, delete
*/
