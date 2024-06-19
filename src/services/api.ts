import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'https://test-front.framework.team/'

export const apiPictures = createApi({
  reducerPath: 'apiPictures',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPictures: builder.query({
      query: () => 'paintings',
    }),
  }),
});

export const { useGetPicturesQuery } = apiPictures;
