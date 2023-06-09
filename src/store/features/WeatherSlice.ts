import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type WeatherState = {
  weather: WeatherWithAnimationString | null;
};

const initialState: WeatherState = {
  weather: null,
};

export const WeatherSlice = createSlice({
  name: 'WeatherSlice',
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherWithAnimationString>) => {
      state.weather = action.payload;
    },
  },
});

export const { setWeather } = WeatherSlice.actions;

export default WeatherSlice.reducer;
