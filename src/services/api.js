import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiPictures = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: (builder) => ({
    getPictures: builder.query({
      query: () => 'paintings',
    }),
  }),
});

export const { useGetPicturesQuery } = apiPictures;