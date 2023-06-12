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
          Good {date.hour >= 18 ? 'evening' : date.hour >= 12 ? 'afternoon' : 'morning'}
        </h3>
        <div className='flex justify-between'>
          <h4 className='text-xl'>
            {date.day}, {date.localtime}
          </h4>
          <h2 className='text-right text-xl'>
            {weather?.location.name}, {weather?.location.region}
            {weather?.location.country === 'United States of America'
              ? ''
              : `, ${weather?.location.country}`}
          </h2>
        </div>
        <div className='flex w-full flex-col items-center py-4'>
          <h3 className='text-5xl'>{weather?.current.temp_f}°F</h3>
          <LottieWrapper />
          <h3 className='text-4xl'>{weather?.current.condition.text}</h3>
        </div>
      </div>
    </div>
  );
}
