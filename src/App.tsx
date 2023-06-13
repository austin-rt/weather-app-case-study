import { useAppSelector } from './store/store';
import useFetchWeather from './hooks/useFetchWeather';
import CurrentWeather from './components/CurrentWeather';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Forecast from './components/Forecast';

export default function App() {
  useFetchWeather();
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);

  return (
    <main
      className={`${
        weather?.current.is_day
          ? 'bg-gradient-to-br from-cyan-400 to-indigo-700'
          : 'bg-gradient-to-br from-cyan-700 to-indigo-900'
      } flex min-h-[100vh] w-full flex-col items-center gap-6 p-6 text-sky-100 sm:gap-12 sm:p-10 sm:pt-8`}
    >
      <CurrentWeather />
      <Forecast />
      <SearchForm />
      <SearchResults />
    </main>
  );
}
