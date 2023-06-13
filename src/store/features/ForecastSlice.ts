import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ForecastState = {
  forecast: ForecastWithAnimationString | null;
};

const initialState: ForecastState = {
  forecast: null,
};

export const ForecastSlice = createSlice({
  name: 'ForecastSlice',
  initialState,
  reducers: {
    setForecast: (state, action: PayloadAction<ForecastWithAnimationString>) => {
      state.forecast = action.payload;
    },
  },
});

export const { setForecast } = ForecastSlice.actions;

export default ForecastSlice.reducer;
