import { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../lib/constants';

export default function useFetchCity(searchQuery: string) {
  const [cities, setCities] = useState<SearchQueryLocation[] | null>(null);

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

  return { cities };
}
