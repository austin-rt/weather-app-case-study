import Lottie from 'lottie-react';
import CloudyNight from '../assets/lottie/CloudyNight.json';
import Foggy from '../assets/lottie/Foggy.json';
import Mist from '../assets/lottie/Mist.json';
import Night from '../assets/lottie/Night.json';
import PartlyCloudy from '../assets/lottie/PartlyCloudy.json';
import PartlyShower from '../assets/lottie/PartlyShower.json';
import RainyNight from '../assets/lottie/RainyNight.json';
import Snow from '../assets/lottie/Snow.json';
import SnowNight from '../assets/lottie/SnowNight.json';
import SnowSun from '../assets/lottie/SnowSun.json';
import Storm from '../assets/lottie/Storm.json';
import StormShowers from '../assets/lottie/StormShowers.json';
import Sunny from '../assets/lottie/Sunny.json';
import Thunder from '../assets/lottie/Thunder.json';
import Windy from '../assets/lottie/Windy.json';
import { useAppSelector } from '../store/store';

// input is WeatherWithAnimationString, output is imported JSON file
const animationData = (weather: WeatherWithAnimationString): any => {
  if (weather.current.condition.animationString === 'CloudyNight') return CloudyNight;
  if (weather.current.condition.animationString === 'Foggy') return Foggy;
  if (weather.current.condition.animationString === 'Mist') return Mist;
  if (weather.current.condition.animationString === 'Night') return Night;
  if (weather.current.condition.animationString === 'PartlyCloudy') return PartlyCloudy;
  if (weather.current.condition.animationString === 'PartlyShower') return PartlyShower;
  if (weather.current.condition.animationString === 'RainyNight') return RainyNight;
  if (weather.current.condition.animationString === 'Snow') return Snow;
  if (weather.current.condition.animationString === 'SnowNight') return SnowNight;
  if (weather.current.condition.animationString === 'SnowSun') return SnowSun;
  if (weather.current.condition.animationString === 'Storm') return Storm;
  if (weather.current.condition.animationString === 'StormShowers') return StormShowers;
  if (weather.current.condition.animationString === 'Sunny') return Sunny;
  if (weather.current.condition.animationString === 'Thunder') return Thunder;
  if (weather.current.condition.animationString === 'Windy') return Windy;
};

export default function LottieWrapper() {
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);

  return (
    <div className='w-5/6 flex justify-center'>
      {weather ? (
        <Lottie
          animationData={animationData(weather)}
          className='w-3/5'
          loop={true}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
