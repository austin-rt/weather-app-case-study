import axios from 'axios';
import { useEffect, useState } from 'react';

import { API } from './lib/constants';
import { /*useAppDispatch,*/ useAppSelector } from './store/store';
import useFetchWeather from './hooks/useFetchWeather';
import CurrentWeather from './components/CurrentWeather';
import { useDispatch } from 'react-redux';
import { setCity } from './store/features/CitySlice';

export default function App() {
  // const dispatch = useAppDispatch();
  useFetchWeather();
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<SearchQueryLocation>();
  const [cities, setCities] = useState<SearchQueryLocation[]>();

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return;
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const { data } = await axios.get(
          `${API.BASE_URL}/${API.SEARCH}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchQuery}`,
        );
        setCities(data);
      } catch (err) {
        console.log(err);
      }
    };
    if (searchQuery) handleSearch();
  }, [searchQuery]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (cities) {
      const newCity = cities.find(city => city.id === Number(e.currentTarget.dataset.cityid));
      if (newCity) setSelectedCity(newCity);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      dispatch(setCity(`${selectedCity.lat},${selectedCity.lon}`));
      setSearchQuery('');
    }
  }, [selectedCity, dispatch]);

  return (
    <main
      className={`${
        weather?.current.is_day
          ? 'bg-gradient-to-br from-blue-600 to-indigo-600'
          : 'bg-gradient-to-br from-blue-900 to-indigo-900'
      } flex h-[100vh] w-full flex-col items-center justify-center gap-4 p-10 text-slate-100`}
    >
      {weather && <CurrentWeather />}
      <form>
        <input
          type='text'
          placeholder='Search for a city'
          className='mr-4 rounded-xl border-2 border-slate-100 border-opacity-30 bg-transparent p-4 text-center transition-all duration-300 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-opacity-50 active:border-opacity-50 active:bg-slate-100 active:bg-opacity-10'
          value={searchQuery}
          onChange={handleInputChange}
        />
      </form>
      {searchQuery && (
        <div className='flex flex-col gap-2'>
          {cities?.map(city => (
            <button
              onClick={handleClick}
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
