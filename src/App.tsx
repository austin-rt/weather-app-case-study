import { useAppSelector } from './store/store';
import useFetchWeather from './hooks/useFetchWeather';
import CurrentWeather from './components/CurrentWeather';
import useDebounce from './hooks/useDebounce';
import useFetchCity from './hooks/useFetchCity';
import useInputState from './hooks/useInputState';
import useSelectCity from './hooks/useSelectCity';

export default function App() {
  useFetchWeather();
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);
  const { searchQuery, handleInputChange } = useInputState();
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const { cities } = useFetchCity(debouncedSearchQuery);
  const { handleCityClick } = useSelectCity(cities!);

  return (
    <main
      className={`${
        weather?.current.is_day
          ? 'bg-gradient-to-br from-blue-600 to-indigo-600'
          : 'bg-gradient-to-br from-blue-900 to-indigo-900'
      } flex min-h-[100vh] w-full flex-col items-center gap-4 p-10 text-slate-100`}
    >
      {weather && <CurrentWeather />}
      <form>
        <input
          type='text'
          placeholder='Search for a city'
          className='mr-4 rounded-xl border-2 border-slate-100 border-opacity-30 bg-transparent p-4 text-center transition-all duration-300 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-opacity-50 active:border-opacity-50 active:bg-slate-100 active:bg-opacity-10'
          value={searchQuery}
          onChange={e => {
            handleInputChange(e);
          }}
        />
      </form>
      {searchQuery && (
        <div className='flex flex-col gap-2'>
          {cities?.map(city => (
            <button
              onClick={() => {
                handleCityClick(city.id);
              }}
              key={city.id}
              data-cityid={city.id}
              className='rounded-xl border-2 border-slate-100 border-opacity-30 bg-transparent p-4 text-center transition-all duration-300 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-opacity-50 active:border-opacity-50 active:bg-slate-100 active:bg-opacity-10'
            >
              {city.name}, {city.region}, {city.country}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
