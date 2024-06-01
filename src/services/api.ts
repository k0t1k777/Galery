import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_URL = 'https://test-front.framework.team/';

export const apiPictures = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPictures: builder.query({
      query: () => 'paintings',
    }),
    getAuthors: builder.query({
      query: () => 'authors',
    }),
    getLocations: builder.query({
      query: () => 'locations',
    }),
  }),
});

export const {
  useGetPicturesQuery,
  useGetAuthorsQuery,
  useGetLocationsQuery,
} = apiPictures;
