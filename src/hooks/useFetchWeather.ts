import { useEffect } from 'react';
import axios from 'axios';
import useLocation from './useLocation';
import { setWeather } from '../store/features/WeatherSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { addAnimationString } from '../lib/helpers';
import { API } from '../lib/constants';

export default function useFetchWeather() {
  useLocation();
  const coordinates = useAppSelector(({ CitySlice }) => CitySlice.city?.coordinates);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchWeather = async () => {
      if (coordinates) {
        const { data }: { data: Weather } = await axios.get(
          `${API.BASE_URL}/${API.CURRENT}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${coordinates}`,
        );
        dispatch(setWeather(addAnimationString(data)));
      }
    };
    fetchWeather();
  }, [coordinates, dispatch]);
}
