import { useAppSelector } from '../store/store';

const Title = () => {
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);

  return (
    <h3
      className={`bg-gradient-to-r bg-clip-text font-title text-2xl font-medium text-transparent sm:text-6xl ${
        weather?.current.is_day ? 'from-yellow-500 to-blue-200' : 'from-yellow-400 to-blue-400'
      }`}
    >
      Blue Skies
    </h3>
  );
};
export default Title;
