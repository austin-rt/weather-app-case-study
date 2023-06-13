import Lottie from 'lottie-react';
import { useAppSelector } from '../store/store';
import { LOTTIE_CHILD } from '../lib/constants';
import Loading from './Loading';
import { animationData } from '../lib/helpers';

type Props = {
  child: LOTTIE_CHILD;
  day?: DayWithAnimationString;
};

export default function LottieWrapper({ child, day }: Props) {
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);
  const forecast = useAppSelector(({ ForecastSlice }) => ForecastSlice.forecast);

  if (child === LOTTIE_CHILD.CURRENT_WEATHER) {
    return (
      <div className='flex w-5/6 justify-center'>
        {weather && (
          <Lottie
            animationData={animationData(weather.current.condition)}
            className='w-5/6 sm:w-3/4'
            loop={true}
          />
        )}
      </div>
    );
  } else if (child === LOTTIE_CHILD.FORECAST) {
    if (day) {
      return (
        <div className='flex w-full justify-evenly'>
          {forecast && (
            <Lottie
              animationData={animationData(day.condition)}
              className='w-full'
              loop={true}
            />
          )}
        </div>
      );
    }
  }
  return <Loading />;
}
