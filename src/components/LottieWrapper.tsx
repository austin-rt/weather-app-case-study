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

// input is WeatherWithAnimationString, output is imported JSON file
const animationData = (weather: WeatherWithAnimationString): any => {
  if (weather.current.condition.animationString === ANIMATIONS.CLOUDY_NIGHT) return CloudyNight;
  if (weather.current.condition.animationString === ANIMATIONS.FOG) return Fog;
  if (weather.current.condition.animationString === ANIMATIONS.MIST) return Mist;
  if (weather.current.condition.animationString === ANIMATIONS.CLEAR_NIGHT) return Night;
  if (weather.current.condition.animationString === ANIMATIONS.PARTLY_CLOUDY) return PartlyCloudy;
  if (weather.current.condition.animationString === ANIMATIONS.PARTLY_SHOWER) return PartlyShower;
  if (weather.current.condition.animationString === ANIMATIONS.RAIN) return Rain;
  if (weather.current.condition.animationString === ANIMATIONS.RAINY_NIGHT) return RainyNight;
  if (weather.current.condition.animationString === ANIMATIONS.SNOW) return Snow;
  if (weather.current.condition.animationString === ANIMATIONS.SNOWY_NIGHT) return SnowyNight;
  if (weather.current.condition.animationString === ANIMATIONS.SNOWY_SUN) return SnowySun;
  if (weather.current.condition.animationString === ANIMATIONS.STORM) return Storm;
  if (weather.current.condition.animationString === ANIMATIONS.STORM_SHOWERS) return StormShowers;
  if (weather.current.condition.animationString === ANIMATIONS.SUNNY) return Sunny;
  if (weather.current.condition.animationString === ANIMATIONS.THUNDER) return Thunder;
  if (weather.current.condition.animationString === ANIMATIONS.WINDY) return Windy;
};

export default function LottieWrapper() {
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);

  return (
    <div className='flex w-5/6 justify-center'>
      {weather ? (
        <Lottie
          animationData={animationData(weather)}
          className='w-full'
          loop={true}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
