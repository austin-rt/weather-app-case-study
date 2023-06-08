import axios from 'axios';
import { useEffect, useState } from 'react';

import { API } from './lib/constants';

function App() {
  const [city, setCity] = useState<string>('Atlanta');
  const [weather, setWeather] = useState<any>({});

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
      <h2></h2>
    </div>
  );
}

export default App;
