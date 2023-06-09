import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

interface CityState {
  city: string;
}

const initialState: CityState = {
  city: 'Atlanta',
};

export const CitySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = CitySlice.actions;

export const setCityAsync =
  (city: string): AppThunk =>
  async dispatch => {
    dispatch(setCity(city));
  };

export default CitySlice.reducer;
