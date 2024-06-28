import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { baseApi } from "@/redux/baseApi";
import { IMeta, IQuery } from "@/types";
import { ICar } from "@/types/ApiResponse";

export interface SearchResult {
  cars: ICar[];
  meta: IMeta;
}

const search_url = "/search";

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<SearchResult, {id: string; params?: IQuery }>({
      query: (arg) => ({
        url: search_url + `/${arg.id}`,
        method: "GET",
        params: arg?.params,
      }),
      transformResponse: (response: ICar[], meta: IMeta) => {
        return {
          cars: response,
          meta,
        };
      },
    }),
  }),
});

export const getSearch = async ({ id , params }: { id: string; params?: IQuery }): Promise<SearchResult> => {
  const result = await axiosInstance({
    url: search_url + `/${id}`,
    method: "GET",
    params,
  });
  return {
    cars: result.data,
    //@ts-ignore
    meta: result.meta,
  };
};

export const { useSearchQuery } = searchApi;
