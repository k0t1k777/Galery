import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team' }),
  endpoints: (builder) => ({
    getPictures: builder.query({
      query: () => 'paintings',
    }),
  }),
});

export const { useGetPicturesQuery } = api;