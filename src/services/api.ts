import { BASE_URL } from 'src/components/utills/constants'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import buildQueryString from 'src/services/utils';

export const apiPictures = createApi({
  reducerPath: 'apiPictures',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
      query: arg => `/paintings/?${buildQueryString(arg)}`
    }),
    getPaginationAmount: builder.query({
      query: arg => `/paintings/?${buildQueryString(arg)}`
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
