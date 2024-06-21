import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pictures } from '../../../types/types';

export interface SliceProps {
  currentPage: number;
  pictures: Pictures[];
  isDarkTheme: string;
  authorValue: string;
  locationValue: string;
  fromDate: string;
  beforeDate: string;
  inputValue: string;
  loading: boolean;
}

const initialState: SliceProps = {
  currentPage: 1,
  pictures: [],
  isDarkTheme: 'light',
  authorValue: '',
  locationValue: '',
  fromDate: '',
  beforeDate: '',
  inputValue: '',
  loading: false
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPictures: (state, action: PayloadAction<Pictures[]>) => {
      state.pictures = action.payload;
    },
    setIsDarkTheme: (state, action: PayloadAction<string>) => {
      state.isDarkTheme = action.payload;
    },
    setAuthorValue: (state, action: PayloadAction<string>) => {
      state.authorValue = action.payload;
    },
    setLocationValue: (state, action: PayloadAction<string>) => {
      state.locationValue = action.payload;
    },
    setFromDate: (state, action: PayloadAction<string>) => {
      state.fromDate = action.payload;
    },
    setBeforeDate: (state, action: PayloadAction<string>) => {
      state.beforeDate = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const {
  setCurrentPage,
  setPictures,
  setIsDarkTheme,
  setAuthorValue,
  setLocationValue,
  setFromDate,
  setBeforeDate,
  setInputValue,
  setLoading
} = slice.actions;

export default slice.reducer;
