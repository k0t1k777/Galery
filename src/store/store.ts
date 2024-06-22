import { configureStore } from '@reduxjs/toolkit';
import { apiPictures } from 'src/services/api';
import slice from 'src/store/features/slice/slice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    counter: slice,
    [apiPictures.reducerPath]: apiPictures.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPictures.middleware),
});

setupListeners(store.dispatch);

