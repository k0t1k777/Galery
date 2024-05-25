import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Pictures, Authors, Locations } from '../../../components/Main/Main';

export interface SliceProps {
  currentPage: number;
  pictures: Pictures[];
  authors: Authors[];
  locations: Locations[];
  isDarkTheme: string;
}

const initialState: SliceProps = {
  currentPage: 1,
  pictures: [],
  authors: [],
  locations: [],
  isDarkTheme: 'light',
  authorValue
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPictures: (state, action: PayloadAction<Pictures[]>) => {
      state.pictures = action.payload;
    },
    setAuthors: (state, action: PayloadAction<Authors[]>) => {
      state.authors = action.payload;
    },
    setLocations: (state, action: PayloadAction<Locations[]>) => {
      state.locations = action.payload;
    },
    setIsDarkTheme: (state, action: PayloadAction<string>) => {
      state.isDarkTheme = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  setPictures,
  setAuthors,
  setLocations,
  setIsDarkTheme,
} = slice.actions;

export const store = configureStore({
  reducer: slice.reducer,
});
