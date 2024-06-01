import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiPictures } from '../services/api';
import { slice } from './features/slice/slice';

export const store = configureStore({
  reducer: {
    [apiPictures.reducerPath]: apiPictures.reducer,
    slice: slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPictures.middleware),
});

setupListeners(store.dispatch);
