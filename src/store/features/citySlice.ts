import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Partial<{ city: UserLocationWithCoordinatesString }> = {};

export const CitySlice = createSlice({
  name: 'CitySlice',
  initialState,
  reducers: {
    /**
     * @param action.payload - at minimum, this should contain the latitude and longitude as {lat: number, lon: number} and at most it is of type UserLocationWithCoordinatesString
     *
     */
    setCity: (state, action: PayloadAction<Partial<UserLocation>>) => {
      if (action.payload) {
        const coordinates = `${action.payload.lat},${action.payload.lon}`;
        state.city = {
          ...action.payload,
          coordinates,
        };
      }
    },
  },
});

export const { setCity } = CitySlice.actions;

export default CitySlice.reducer;
