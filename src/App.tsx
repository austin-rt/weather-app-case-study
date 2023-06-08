import axios from 'axios';
import { useEffect, useState } from 'react';

import { API } from './lib/constants';
import { convertToCustomDate } from './lib/helpers';

function App() {
  const [city, setCity] = useState<string>('33.75,-84.39');
  const [weather, setWeather] = useState<Weather>();
  const [date, setDate] = useState<CustomDate | undefined>();

  useEffect(() => {
    const fetchWeather = async () => {
      const { data } = await axios.get(
        `${API.BASE_URL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`,
      );
      setWeather(data);
      setDate(convertToCustomDate(data.location.localtime));
    };
    fetchWeather();
  }, []);

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
          <h3>{weather.current.condition.text}</h3>
        </>
      )}
    </div>
  );
}

export default App;
