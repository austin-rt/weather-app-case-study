import { useAppSelector } from '../store/store';
import { LOTTIE_CHILD } from '../lib/constants';
import LottieWrapper from './LottieWrapper';
import useFetchForecast from '../hooks/useFetchForecast';
import { renderDay } from '../lib/helpers';

type Props = {
  className?: string;
};

export default function Forecast({ className }: Props) {
  useFetchForecast();
  const forecast = useAppSelector(({ ForecastSlice }) => ForecastSlice.forecast);

  return (
    <div className={className}>
      {forecast && (
        <section className='flex w-full justify-evenly gap-2 p-4 sm:justify-between sm:gap-5'>
          {forecast.forecastday.map((day: ForecastDayWithAnimationString) => (
            <article
              key={day.date}
              className='flex w-5/12 flex-col items-center rounded-2xl bg-slate-50 bg-opacity-10 px-4 py-2 shadow-2xl sm:rounded-3xl sm:px-6 sm:py-3'
            >
              <h2 className='text-center'>{renderDay(day.date)}</h2>
              <LottieWrapper
                child={LOTTIE_CHILD.FORECAST}
                day={day.day}
              />
              <div className='flex w-full justify-between text-sm font-extralight'>
                <p>{day.day.mintemp_f.toFixed(0)}°F</p>
                <p>{day.day.maxtemp_f.toFixed(0)}°F</p>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
