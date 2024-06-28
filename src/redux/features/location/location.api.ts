import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { ILocation } from "@/types/ApiResponse";

const location_url = "/location";

export const locationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query<{ locations: ILocation[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: location_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: ILocation[], meta: IMeta) => {
        return {
          locations: response,
          meta,
        };
      },
      providesTags: [tagTypes.location],
    }),
    getSingleLocation: builder.query<{ location: ILocation }, { id: string; params?: IQuery }>({
      query: (arg) => ({
        url: location_url + "/" + arg?.id,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: ILocation) => {
        return {
          location: response,
        };
      },
      providesTags: [tagTypes.location],
    }),
    addLocation: builder.mutation({
      query: (arg: { data: { name : string } }) => ({
        url: location_url + "/create",
        method: "POST",
        data: arg.data,
      }),
      invalidatesTags: [tagTypes.location],
    }),
    updateLocation: builder.mutation({
      query: (arg: { id: string; data: Partial<{ location: string }> }) => ({
        url: location_url + "/update" + "/" + arg.id,
        method: "PATCH",
        data: arg.data,
      }),
      invalidatesTags: [tagTypes.location],
    }),
    deleteLocation: builder.mutation({
      query: (arg: { id: string }) => ({
        url: location_url + "/delete" + "/" + arg.id,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.location],
    }),
  }),
});

export const getLocations = async ({ params }: { params?: IQuery }): Promise<{ locations: ILocation[]; meta: IMeta }> => {
  const result = await axiosInstance({
    url: location_url,
    method: "GET",
    params,
  });
  return {
    locations: result.data,
    //@ts-ignore
    meta: result.meta,
  };
};
export const getSingleLocations = async ({id,params}:{ id: string; params?: IQuery }): Promise<{ location: ILocation;  }> => {
  const result = await axiosInstance({
    url: location_url + "/" + id,
    method: "GET",
    params,
  });
  return {
    location: result?.data,
  };
};


export const { useAddLocationMutation, useDeleteLocationMutation, useGetLocationsQuery, useGetSingleLocationQuery, useUpdateLocationMutation } =
  locationApi;
