import { ANIMATIONS } from '../lib/constants';
import Lottie from 'lottie-react';
import CloudyNight from '../assets/lottie/CloudyNight.json';
import Fog from '../assets/lottie/Fog.json';
import Mist from '../assets/lottie/Mist.json';
import Night from '../assets/lottie/ClearNight.json';
import PartlyCloudy from '../assets/lottie/PartlyCloudy.json';
import PartlyShower from '../assets/lottie/PartlyShower.json';
import Rain from '../assets/lottie/Rain.json';
import RainyNight from '../assets/lottie/RainyNight.json';
import Snow from '../assets/lottie/Snow.json';
import SnowyNight from '../assets/lottie/SnowyNight.json';
import SnowySun from '../assets/lottie/SnowySun.json';
import Storm from '../assets/lottie/Storm.json';
import StormShowers from '../assets/lottie/StormShowers.json';
import Sunny from '../assets/lottie/Sunny.json';
import Thunder from '../assets/lottie/Thunder.json';
import Windy from '../assets/lottie/Windy.json';
import { useAppSelector } from '../store/store';
import { LOTTIE_CHILD } from '../lib/constants';

// input is WeatherWithAnimationString, output is imported JSON file
const animationData = (condition: WeatherConditionWithAnimationString): any => {
  if (condition.animationString === ANIMATIONS.CLOUDY_NIGHT) return CloudyNight;
  if (condition.animationString === ANIMATIONS.FOG) return Fog;
  if (condition.animationString === ANIMATIONS.MIST) return Mist;
  if (condition.animationString === ANIMATIONS.CLEAR_NIGHT) return Night;
  if (condition.animationString === ANIMATIONS.PARTLY_CLOUDY) return PartlyCloudy;
  if (condition.animationString === ANIMATIONS.PARTLY_SHOWER) return PartlyShower;
  if (condition.animationString === ANIMATIONS.RAIN) return Rain;
  if (condition.animationString === ANIMATIONS.RAINY_NIGHT) return RainyNight;
  if (condition.animationString === ANIMATIONS.SNOW) return Snow;
  if (condition.animationString === ANIMATIONS.SNOWY_NIGHT) return SnowyNight;
  if (condition.animationString === ANIMATIONS.SNOWY_SUN) return SnowySun;
  if (condition.animationString === ANIMATIONS.STORM) return Storm;
  if (condition.animationString === ANIMATIONS.STORM_SHOWERS) return StormShowers;
  if (condition.animationString === ANIMATIONS.SUNNY) return Sunny;
  if (condition.animationString === ANIMATIONS.THUNDER) return Thunder;
  if (condition.animationString === ANIMATIONS.WINDY) return Windy;
};

type Props = {
  child: LOTTIE_CHILD;
  day?: DayWithAnimationString;
};

export default function LottieWrapper({ child, day }: Props): JSX.Element {
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
        <article className='flex w-full justify-evenly'>
          {forecast && (
            <Lottie
              animationData={animationData(day.condition)}
              className='w-full'
              loop={true}
            />
          )}
        </article>
      );
    }
  }
  return <div>Loading...</div>;
}
