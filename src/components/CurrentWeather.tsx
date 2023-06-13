import { LOTTIE_CHILD } from '../lib/constants';
import { generateCustomDate } from '../lib/helpers';
import { useAppSelector } from '../store/store';
import LottieWrapper from './LottieWrapper';

export default function CurrentWeather() {
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);
  const date = generateCustomDate();

  return (
    <>
      {weather && (
        <section className='flex w-full flex-col items-center'>
          <div className='container max-w-lg rounded-3xl bg-slate-50 bg-opacity-10 p-6 shadow-2xl sm:p-8'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-1'>
                <h3 className='flex flex-col text-3xl font-semibold sm:text-3xl'>
                  Good {date.hour >= 18 ? 'evening' : date.hour >= 12 ? 'afternoon' : 'morning'}
                </h3>
                <h2 className='text-md font-light sm:text-xl'>
                  {weather.location.name}, {weather.location.region}
                </h2>
                <h4 className='text-sm font-extralight sm:text-lg'>
                  {date.day}, {date.localtime}
                </h4>
              </div>
              <h3 className='text-5xl sm:text-6xl'>{weather.current.temp_f.toFixed(0)}°F</h3>
            </div>
            <div className='flex w-full flex-col items-center gap-1 pt-2 sm:pt-4'>
              <h3 className='text-4xl font-normal sm:text-3xl'>{weather.current.condition.text}</h3>
              <LottieWrapper child={LOTTIE_CHILD.CURRENT_WEATHER} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
