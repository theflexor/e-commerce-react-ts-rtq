import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setSearchData } from "./slices/SearchSlice";

export const ItemDetail = createApi({
  reducerPath: "AliApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aliexpress-datahub.p.rapidapi.com/",
    headers: {
      'X-RapidAPI-Key': '1ebce3d237msh8148533b976284cp162f25jsnd972bd8be737',
      'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
    },
  }),
  endpoints: (build) => ({
    getProductsSearch: build.query({
      query: (searchValues: any) => {
        console.log(searchValues);
        return {
          url: "item_search",
          params: { ...searchValues },
        };
      },
    }),
    getProductDetail: build.query({
      query: (id) => {
        return {
          url: "item_detail",
          params: { itemId: id },
        };
      },
    }),
  }),
});

export const { useGetProductDetailQuery, useGetProductsSearchQuery } =
  ItemDetail;
