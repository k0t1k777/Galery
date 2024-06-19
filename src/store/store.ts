import { configureStore } from '@reduxjs/toolkit';
import { apiPictures } from '../services/api';
import slice from './features/slice/slice';
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

