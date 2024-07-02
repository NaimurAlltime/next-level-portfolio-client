import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const experienceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addExperience: build.mutation({
      query: (payload) => ({
        url: "/experience/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.experience],
    }),

    getAllExperience: build.query({
      query: () => ({
        url: "/experience",
        method: "GET",
      }),
      providesTags: [tagTypes.experience],
    }),
  }),
});

export const { useAddExperienceMutation, useGetAllExperienceQuery } =
  experienceApi;
