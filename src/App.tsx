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

  return (
    <div
      className={`${
        weather?.current.is_day
          ? 'bg-gradient-to-br from-cyan-400 to-indigo-700'
          : 'bg-gradient-to-br from-cyan-700 to-indigo-900'
      } flex min-h-[100vh] min-w-[100vw] flex-col items-center px-3 py-5 text-sky-100`}
    >
      {!weather && !forecast ? (
        <Loading className='flex w-1/2 flex-col items-center py-8' />
      ) : (
        <main
          className={`flex w-full flex-col items-center gap-1 p-2 py-0 text-sky-100 sm:gap-3 sm:px-10 sm:pb-3 sm:pt-6`}
        >
          <CurrentWeather />
          <Forecast className='flex max-w-2xl justify-center pb-0' />
        </main>
      )}
      <SearchInput />
      <SearchResults />
    </div>
  );
}
