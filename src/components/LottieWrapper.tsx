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

export default function LottieWrapper() {
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);

  return (
    <div className='bg-slate-400'>
      <Lottie
        animationData={}
        className={'h-[100px]'}
        loop={true}
      />
    </div>
  );
}
