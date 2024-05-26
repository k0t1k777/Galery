import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Pictures, Authors, Locations } from '../../../components/Main/Main';

export interface SliceProps {
  currentPage: number;
  pictures: Pictures[];
  authors: Authors[];
  locations: Locations[];
  isDarkTheme: string;
  authorValue: string;
  locationValue: string;
  fromDate: string;
  beforeDate: string;
  inputValue: string;
  amount: number;
}

const initialState: SliceProps = {
  currentPage: 1,
  pictures: [],
  authors: [],
  locations: [],
  isDarkTheme: 'light',
  authorValue: '',
  locationValue: '',
  fromDate: '',
  beforeDate: '',
  inputValue: '',
  amount: 0,
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
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload
    }
  },
});

export const {
  setCurrentPage,
  setPictures,
  setAuthors,
  setLocations,
  setIsDarkTheme,
  setAuthorValue,
  setLocationValue,
  setFromDate,
  setBeforeDate,
  setInputValue,
  setAmount,
} = slice.actions;

export const store = configureStore({
  reducer: slice.reducer,
});
