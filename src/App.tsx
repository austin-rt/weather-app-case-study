import { useAppSelector } from './store/store';
import useFetchWeather from './hooks/useFetchWeather';
import CurrentWeather from './components/CurrentWeather';

function App() {
  useFetchWeather();
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);

  return (
    <main
      className={`${
        weather?.current.is_day
          ? 'bg-gradient-to-br from-blue-600 to-indigo-600'
          : 'bg-gradient-to-br from-blue-900 to-indigo-900'
      } w-full h-[100vh] text-slate-100 p-10 flex flex-col justify-center items-center gap-4`}
    >
      {weather && <CurrentWeather />}
    </main>
  );
}

export default App;
