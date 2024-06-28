import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta, IQuery } from "@/types";
import { ICar } from "@/types/ApiResponse";

const car_url = "/cars";

export const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query<{ cars: ICar[]; meta: IMeta }, { params?: IQuery }>({
      query: (arg) => ({
        url: car_url,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: ICar[], meta: IMeta) => {
        return {
          cars: response,
          meta,
        };
      },
      providesTags: [tagTypes.car],
    }),
    getSingleCar: builder.query<{ car: ICar }, { id: string; params?: IQuery }>(
      {
        query: (arg) => ({
          url: car_url + "/" + arg?.id,
          method: "GET",
          params: arg?.params,
        }),
        transformResponse: (response: ICar) => {
          return {
            car: response,
          };
        },
        providesTags: [tagTypes.car],
      }
    ),
    // form data will be {payload: json, image: file}
    addCar: builder.mutation({
      query: (arg: { data: FormData }) => ({
        url: car_url + "/create",
        method: "POST",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.car],
    }),
    updateCar: builder.mutation({
      query: (arg: { id: string; data: FormData }) => ({
        url: car_url + "/update" + "/" + arg.id,
        method: "PATCH",
        data: arg.data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.car],
    }),
    deleteCar: builder.mutation({
      query: (arg: { id: string }) => ({
        url: car_url + "/delete" + "/" + arg.id,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.car],
    }),
  }),
});

export const getCars = async ({
  params,
}: {
  params?: IQuery;
}): Promise<{ cars: ICar[]; meta: IMeta }> => {
  const result = await axiosInstance({
    url: car_url,
    method: "GET",
    params,
  });
  return {
    cars: result.data,
    //@ts-ignore
    meta: result.meta,
  };
};

export const getSingleCar = async ({
  id,
  params,
}: {
  id: string;
  params?: IQuery;
}): Promise<{ car: ICar }> => {
  const result = await axiosInstance({
    url: car_url + "/" + id,
    method: "GET",
    params,
  });
  // console.log(result);
  return {
    car: result?.data,
  };
};

export const {
  useAddCarMutation,
  useDeleteCarMutation,
  useGetCarsQuery,
  useGetSingleCarQuery,
  useUpdateCarMutation,
} = carApi;
