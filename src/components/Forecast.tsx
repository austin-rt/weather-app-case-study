import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { API, LOTTIE_CHILD } from '../lib/constants';
import axios from 'axios';
import { setForecast } from '../store/features/ForecastSlice';
import { addAnimationStringToForecast } from '../lib/helpers';
import LottieWrapper from './LottieWrapper';

export default function Forecast() {
  const city = useAppSelector(({ CitySlice }) => CitySlice.city);
  const forecast = useAppSelector(({ ForecastSlice }) => ForecastSlice.forecast);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (city) {
      try {
        const fetchForecast = async () => {
          const { data }: { data: { forecast: Forecast } } = await axios.get(
            `${API.BASE_URL}/${API.FORECAST}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city.lat},${city.lon}&days=14&aqi=no&alerts=no`,
          );
          dispatch(setForecast(addAnimationStringToForecast(data.forecast)));
        };
        fetchForecast();
      } catch (err) {
        console.log(err);
      }
    }
  }, [dispatch, city]);
  return (
    <>
      {forecast && (
        <section className='flex w-full justify-center gap-5 p-6 sm:w-11/12 sm:justify-between'>
          {forecast.forecastday.map((day: ForecastDayWithAnimationString) => (
            <article
              key={day.date}
              className='flex w-4/12 flex-col items-center gap-2 rounded-3xl bg-slate-50 bg-opacity-10 p-3 px-6 shadow-2xl sm:w-5/12 sm:p-3 sm:px-8'
            >
              <h2 className='text-center'>
                {new Date(day.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' })}
              </h2>
              <LottieWrapper
                child={LOTTIE_CHILD.FORECAST}
                day={day.day}
              />
              <div className='flex w-full justify-between text-sm font-extralight'>
                <p>H: {day.day.maxtemp_f.toFixed(0)}°F</p>
                <p>L: {day.day.mintemp_f.toFixed(0)}°F</p>
              </div>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
