import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type SearchResultsState = {
  cities: SearchQueryLocation[];
};

const initialState: SearchResultsState = {
  cities: [],
};

export const SearchResultsSlice = createSlice({
  name: 'SearchResultsSlice',
  initialState,
  reducers: {
    setCities: (state, action: PayloadAction<SearchQueryLocation[]>) => {
      state.cities = action.payload;
    },
  },
});

export const { setCities } = SearchResultsSlice.actions;

export default SearchResultsSlice.reducer;
