import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

import { API } from './lib/constants';
import { convertToCustomDate } from './lib/helpers';

function App() {
  // ========== extract logic to useGeoLocation and useFetchWeather hooks ========== //
  const inputRef = useRef<HTMLInputElement>(null);

  const [city, setCity] = useState<string>('Atlanta');
  const [cities, setCities] = useState<any[]>();
  const [cityIsSelected, toggleCityIsSelected] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather>();
  const [date, setDate] = useState<CustomDate | undefined>();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
    toggleCityIsSelected(true);
  };

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axios.get(
      `${API.BASE_URL}/${API.SEARCH}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${inputRef.current?.value}`,
    );
    setCities(data);
  };

  useEffect(() => {
    if (navigator.geolocation && !cityIsSelected) {
      navigator.geolocation.getCurrentPosition(position => {
        setCity(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }

    const fetchWeather = async () => {
      const { data } = await axios.get(
        `${API.BASE_URL}/${API.CURRENT}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`,
      );
      setWeather(data);
      setDate(convertToCustomDate(data.location.localtime));
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
