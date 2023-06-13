import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type DebouncedSearchQueryState = {
  debouncedSearchQuery: string;
};

const initialState: DebouncedSearchQueryState = {
  debouncedSearchQuery: '',
};

/**
 * @description
 * This slice is responsible for storing the search query but it first needs to be debounced using the useDebounce hook.
 */
export const debouncedSearchQuerySlice = createSlice({
  name: 'DebouncedSearchQuerySlice',
  initialState,
  reducers: {
    setDebouncedSearchQuery: (state, action: PayloadAction<string>) => {
      state.debouncedSearchQuery = action.payload;
    },
  },
});

export const { setDebouncedSearchQuery } = debouncedSearchQuerySlice.actions;

export default debouncedSearchQuerySlice.reducer;
