import axios from 'axios';
import { useState, useRef } from 'react';

import { API } from './lib/constants';
import { generateCustomDate } from './lib/helpers';
import { useAppDispatch, useAppSelector } from './store/store';
import { setCity } from './store/features/CitySlice';
import useFetchWeather from './hooks/useFetchWeather';

import LottieWrapper from './components/LottieWrapper';

function App() {
  const dispatch = useAppDispatch();
  useFetchWeather();
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);

  const inputRef = useRef<HTMLInputElement>(null);

  const [cities, setCities] = useState<any[]>();
  // const [cityIsSelected, toggleCityIsSelected] = useState<boolean>(false);
  const [date, setDate] = useState<CustomDate>(generateCustomDate());

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCity(e.target.value));
    // toggleCityIsSelected(true);
  };

  // should be on input change with debounce so no submit is needed
  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${API.BASE_URL}/${API.SEARCH}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${inputRef.current?.value}`,
      );
      setCities(data);
    } catch (err) {
      // find API error codes and handle accordingly
      console.log(err);
    }
  };

  return (
    <div>
      {date && (
        <>
          <h3>
            {date.day}, {date.hour}
          </h3>
        </>
      )}
      {weather && (
        <>
          <h2>
            {weather.location.name}, {weather.location.region}, {weather.location.country}
          </h2>
          <h3>{weather.current.temp_f}°F</h3>
          <LottieWrapper />
          <h3>{weather.current.condition.text}</h3>
        </>
      )}
      <form onSubmit={handleSearchSubmit}>
        <input ref={inputRef} />
      </form>
      <form>
        <select onChange={handleSelectChange}>
          {cities?.map(c => (
            <option
              key={c.id}
              value={`${c.lat},${c.lon}`}
            >
              {c.name}, {c.region}, {c.country}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default App;
