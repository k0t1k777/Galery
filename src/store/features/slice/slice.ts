import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Pictures, Authors, Locations } from '../../../components/Main/Main';

export interface SliceProps {
  currentPage: number;
  pictures: Pictures[];
}

const initialState: SliceProps = {
  currentPage: 1,
  pictures: [],
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPictures: (state, action: PayloadAction<Pictures[]>) => {
      state.pictures = action.payload;
    }
  },
});

export const { setCurrentPage, setPictures } = slice.actions;

export const store = configureStore({
  reducer: slice.reducer,
});
