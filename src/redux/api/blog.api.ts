import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (payload) => ({
        url: "/blog/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.blog],
    }),

    getAllBlog: build.query({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),

    getSingleBlog: build.query({
      query: (id) => ({
        url: "/blog/" + id,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogQuery,
  useGetSingleBlogQuery,
} = blogApi;
