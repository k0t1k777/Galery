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
  })
});

export const {
  useGetAuthorsQuery,
  useGetLocationsQuery,
  useGetSearchAuthorIdQuery,
  useGetSearchLocationIdQuery,
} = apiPictures;
