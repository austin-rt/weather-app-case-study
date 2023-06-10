import { useEffect } from 'react';
import axios from 'axios';
import { API } from '../lib/constants';
import { setWeather } from '../store/features/WeatherSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

const useFetchWeather = () => {
  const city = useAppSelector(({ CitySlice }) => CitySlice.city);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchWeather = async () => {
      if (city) {
        const { data }: { data: Weather } = await axios.get(
          `${API.BASE_URL}/${API.CURRENT}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`,
        );
        dispatch(setWeather(data));
      }
    };
    fetchWeather();
  }, [city, dispatch]);
};

export default useFetchWeather;
