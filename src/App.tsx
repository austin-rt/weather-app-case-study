import { useAppSelector } from './store/store';
import useFetchWeather from './hooks/useFetchWeather';
import CurrentWeather from './components/CurrentWeather';
import SearchInput from './components/SearchInput';
import SearchResults from './components/SearchResults';
import Forecast from './components/Forecast';
import Loading from './components/Loading';

export default function App() {
  useFetchWeather();
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);
  const forecast = useAppSelector(({ ForecastSlice }) => ForecastSlice.forecast);

  return !weather && !forecast ? (
    <Loading className='flex min-h-[100vh] min-w-[100vw] items-center justify-center' />
  ) : (
    <main
      className={`${
        weather?.current.is_day
          ? 'bg-gradient-to-br from-cyan-400 to-indigo-700'
          : 'bg-gradient-to-br from-cyan-700 to-indigo-900'
      } flex min-h-[100vh] w-full flex-col items-center gap-3 px-2 py-6 text-sky-100 sm:p-10 sm:pt-6`}
    >
      <CurrentWeather />
      <Forecast className='flex max-w-2xl justify-center' />
      <SearchInput />
      <SearchResults />
    </main>
  );
}
