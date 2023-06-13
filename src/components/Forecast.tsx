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
        <section className='flex w-full justify-between gap-5 p-4'>
          {forecast.forecastday.map((day: ForecastDayWithAnimationString) => (
            <article
              key={day.date}
              className='flex w-5/12 flex-col items-center gap-2 rounded-3xl bg-slate-50 bg-opacity-10 p-3 px-6 shadow-2xl'
            >
              <h2 className='text-center'>{renderDay(day.date)}</h2>
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
    </div>
  );
}
