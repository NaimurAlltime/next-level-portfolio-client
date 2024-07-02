import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProject: build.mutation({
      query: (payload) => ({
        url: "/project/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.project],
    }),

    getAllProjects: build.query({
      query: () => ({
        url: "/project",
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),

    getSingleProject: build.query({
      query: (id) => ({
        url: "/project/" + id,
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetAllProjectsQuery,
  useGetSingleProjectQuery,
} = projectApi;
