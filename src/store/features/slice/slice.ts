import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SliceProps {
  currentPage: number;
  isDarkTheme: string;
  authorValue: string;
  locationValue: string;
  fromDate: string;
  beforeDate: string;
  inputValue: string;
}

const initialState: SliceProps = {
  currentPage: 1,
  isDarkTheme: 'light',
  authorValue: '',
  locationValue: '',
  fromDate: '',
  beforeDate: '',
  inputValue: '',
};

export const slice = createSlice({
  name: 'picture',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
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
  }
});

export const {
  setCurrentPage,
  setIsDarkTheme,
  setAuthorValue,
  setLocationValue,
  setFromDate,
  setBeforeDate,
  setInputValue,
} = slice.actions;

export default slice.reducer;
