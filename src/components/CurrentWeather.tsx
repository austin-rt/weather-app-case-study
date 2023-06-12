import { generateCustomDate } from '../lib/helpers';
import { useAppSelector } from '../store/store';
import LottieWrapper from './LottieWrapper';

export default function CurrentWeather() {
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);
  const date = generateCustomDate();
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='container max-w-xl rounded-xl bg-slate-50 bg-opacity-30 p-8'>
        <h3 className='text-4xl font-bold'>
          Good
          {parseInt(date.hour) < 12
            ? ' morning'
            : weather?.current.is_day && parseInt(date.hour) < 6
            ? ' afternoon'
            : ' evening'}
        </h3>
        <h4>
          {date.day}, {date.hour}
        </h4>
        <h2 className='text-right text-lg'>
          {weather?.location.name}, {weather?.location.region}
          {weather?.location.country === 'United States of America'
            ? ''
            : `, ${weather?.location.country}`}
        </h2>
        <div className='flex w-full flex-col items-center py-4'>
          <h3 className='text-2xl'>{weather?.current.condition.text}</h3>
          <LottieWrapper />
          <h3 className='text-4xl'>{weather?.current.temp_f}°F</h3>
        </div>
      </div>
    </div>
  );
}
