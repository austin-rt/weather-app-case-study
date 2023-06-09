import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

import { API } from './lib/constants';
import { convertToCustomDate } from './lib/helpers';
import useGeolocation from './hooks/useGeolocation';
import { useAppDispatch } from './store/store';
import { setCityAsync } from './store/features/citySlice';

function App() {
  const city = useGeolocation();
  const dispatch = useAppDispatch();

  // ========== extract logic to useFetchWeather hook ========== //
  const inputRef = useRef<HTMLInputElement>(null);

  // const [city, setCity] = useState<string>(`${coordinates}`);
  const [cities, setCities] = useState<any[]>();
  const [cityIsSelected, toggleCityIsSelected] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather>();
  const [date, setDate] = useState<CustomDate | undefined>();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCityAsync(e.target.value));
    toggleCityIsSelected(true);
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

  useEffect(() => {
    if (city && !cityIsSelected) {
      dispatch(setCityAsync(city));
    }

    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(
          `${API.BASE_URL}/${API.CURRENT}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`,
        );
        setWeather(data);
        setDate(convertToCustomDate(data.location.localtime));
      } catch (err) {
        // find API error codes and handle accordingly
        console.log(err);
      }
    };
    fetchWeather();
  }, [city, cityIsSelected]);

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
          {/* replace with custom icons */}
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
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
