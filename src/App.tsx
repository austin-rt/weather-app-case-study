import axios from 'axios';
import { useEffect, useState } from 'react';

import { API } from './lib/constants';

function App() {
  const [city, setCity] = useState<string>('33.75,-84.39');
  const [weather, setWeather] = useState<Weather>();

  console.log(weather);

  useEffect(() => {
    const fetchWeather = async () => {
      const { data } = await axios.get(
        `${API.BASE_URL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`,
      );
      setWeather(data);
    };
    fetchWeather();
  }, []);

  return (
    <div>
      {weather && (
        <h2>
          {weather.location.name}, {weather.location.region}
        </h2>
      )}
    </div>
  );
}

export default App;
