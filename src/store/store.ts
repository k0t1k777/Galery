import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiPictures } from '../services/api';
import { slice } from "../store/features/slice/slice";

export const reducers = combineReducers({
  [apiPictures.reducerPath]: apiPictures.reducer,
  slice: slice.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPictures.middleware),
});

// export const store = configureStore({
//   reducer: {
//     [apiPictures.reducerPath]: apiPictures.reducer,
//     // slice: slice.reducer,
//     // reducer: { slice },
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiPictures.middleware),
// });

setupListeners(store.dispatch);
