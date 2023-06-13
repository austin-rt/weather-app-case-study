import { useAppSelector } from './store/store';
import useFetchWeather from './hooks/useFetchWeather';
import CurrentWeather from './components/CurrentWeather';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

export default function App() {
  useFetchWeather();
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);
  const debouncedSearchQuery = useAppSelector(
    ({ DebouncedSearchQuerySlice }) => DebouncedSearchQuerySlice.debouncedSearchQuery,
  );

  return (
    <main
      className={`${
        weather?.current.is_day
          ? 'bg-gradient-to-br from-blue-600 to-indigo-600'
          : 'bg-gradient-to-br from-blue-900 to-indigo-900'
      } flex min-h-[100vh] w-full flex-col items-center gap-4 p-10 text-slate-100`}
    >
      {weather && <CurrentWeather />}
      <SearchForm />
      {debouncedSearchQuery && <SearchResults />}
    </main>
  );
}
