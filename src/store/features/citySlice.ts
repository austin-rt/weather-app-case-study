import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// this should be refactored to use the city object from the api and extract the lat and lon
export type CityState = {
  city: string;
};

const initialState: CityState = {
  city: '',
};

export const CitySlice = createSlice({
  name: 'CitySlice',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = CitySlice.actions;

export default CitySlice.reducer;
