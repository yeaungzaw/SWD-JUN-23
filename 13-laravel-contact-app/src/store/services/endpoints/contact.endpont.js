import { ApiService } from "../Api.service";

const contactEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => ({
        method: "GET",
        url: "/contact",
      }),
    }),
    createContact: builder.mutation({
      query: (formData) => ({
        method: "POST",
        url: "/contact",
        body: formData,
      }),
    }),
    editContact: builder.mutation({
      query: (id, formData) => ({
        method: "PUT",
        url: `/contact/${id}`,
        body: formData,
      }),
    }),
  }),
});

export const {
  useGetContactQuery,
  useCreateContactMutation,
  useEditContactMutation,
} = contactEndpoint;

/*
query => get
mutate => put, patch, delete, post
*/
