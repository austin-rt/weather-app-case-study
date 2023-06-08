import axios from 'axios';
import { useEffect, useState } from 'react';

import { API } from './lib/constants';
import { convertToCustomDate } from './lib/helpers';

function App() {
  const [city, setCity] = useState<string>('Atlanta');
  const [cityIsSelected, toggleCityIsSelected] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather>();
  const [date, setDate] = useState<CustomDate | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
    toggleCityIsSelected(true);
  };

  useEffect(() => {
    if (navigator.geolocation && !cityIsSelected) {
      navigator.geolocation.getCurrentPosition(position => {
        setCity(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }

    const fetchWeather = async () => {
      const { data } = await axios.get(
        `${API.BASE_URL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`,
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
            {weather.location.name}, {weather.location.region}
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
      <form>
        <select onChange={handleChange}>
          <option value='Atlanta'>Atlanta</option>
          <option value='New York'>New York</option>
          <option value='Los Angeles'>Los Angeles</option>
        </select>
      </form>
    </div>
  );
}

export default App;
