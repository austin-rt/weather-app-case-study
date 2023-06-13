import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setForecast } from '../store/features/ForecastSlice';
import { addAnimationStringToForecast } from '../lib/helpers';
import { API } from '../lib/constants';

export default function useFetchForecast() {
  const dispatch = useAppDispatch();
  const city = useAppSelector(({ CitySlice }) => CitySlice.city);
  useEffect(() => {
    if (city) {
      const fetchForecast = async () => {
        try {
          const { data }: { data: { forecast: Forecast } } = await axios.get(
            `${API.BASE_URL}/${API.FORECAST}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city.lat},${city.lon}&days=14&aqi=no&alerts=no`,
          );
          dispatch(setForecast(addAnimationStringToForecast(data.forecast)));
        } catch (err) {
          console.log(err);
        }
      };
      fetchForecast();
    }
  }, [dispatch, city]);
}
