axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const apiPictures = createApi({
  reducerPath: 'apiPictures',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: builder => ({
    getAuthors: builder.query({
      query: () => 'authors'
    }),
    getLocations: builder.query({
      query: () => 'locations'
    }),
    getSearchAuthorId: builder.query({
      query: value => `/authors/?name=${value}`
    }),
    getSearchLocationId: builder.query({
      query: value => `/locations/?location=${value}`
    }),
    getPagination: builder.query({
      query: arg => `/paintings/?_page=${arg.currentPage}&_limit=${arg.pagesAmount}${arg.inputValue ? '&q=' : ''}${arg.inputValue ? arg.inputValue : ''}${arg.authorId ? '&authorId=' : ''}${arg.authorId ? arg.authorId : ''}${arg.locationId ? '&locationId=' : ''}${arg.locationId ? arg.locationId : ''}${arg.fromDate ? '&created_gte=' : ''}${arg.fromDate ? arg.fromDate : ''}${arg.beforeDate ? '&created_lte=' : ''}${arg.beforeDate ? arg.beforeDate : ''}`
    }),
    getPaginationAmount: builder.query({
      query: arg => `/paintings/?${arg.q ? '&q=' : ''}${arg.q ? arg.q : ''}${arg.authorId ? '&authorId=' : ''}${arg.authorId ? arg.authorId : ''}${arg.locationId ? '&locationId=' : ''}${arg.locationId ? arg.locationId : ''}${arg.fromDate ? '&created_gte=' : ''}${arg.fromDate ? arg.fromDate : ''}${arg.beforeDate ? '&created_lte=' : ''}${arg.beforeDate ? arg.beforeDate : ''}`
    }),
  })
});

export const {
  useGetAuthorsQuery,
  useGetLocationsQuery,
  useGetSearchAuthorIdQuery,
  useGetSearchLocationIdQuery,
  useGetPaginationQuery,
  useGetPaginationAmountQuery,
} = apiPictures;
