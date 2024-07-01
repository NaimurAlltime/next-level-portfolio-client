import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSkill: build.mutation({
      query: (payload) => ({
        url: "/skill/create",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [tagTypes.skill],
    }),

    getSkill: build.query({
      query: () => ({
        url: "/skill",
        method: "GET",
      }),
      providesTags: [tagTypes.skill],
    }),
  }),
});

export const { useAddSkillMutation, useGetSkillQuery } = skillApi;
