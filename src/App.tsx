import axios from 'axios';
import { useEffect, useState } from 'react';

import { API } from './lib/constants';

function App() {
  const [city, setCity] = useState<string>('Atlanta');

  useEffect(() => {
    const fetchWeather = async () => {
      const { data } = await axios.get(
        `${API.BASE_URL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`,
      );
      console.log(data);
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
