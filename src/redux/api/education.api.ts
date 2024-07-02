import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const educationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addEducation: build.mutation({
      query: (payload) => ({
        url: "/education/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.education],
    }),

    getAllEducation: build.query({
      query: () => ({
        url: "/education",
        method: "GET",
      }),
      providesTags: [tagTypes.education],
    }),
  }),
});

export const { useAddEducationMutation, useGetAllEducationQuery } =
  educationApi;
