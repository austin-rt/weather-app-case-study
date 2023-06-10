import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
