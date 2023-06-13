import { useEffect } from 'react';
import axios from 'axios';
import { API } from '../lib/constants';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setCities } from '../store/features/SearchResultsSlice';

export default function useFetchCities() {
  const debouncedSearchQuery = useAppSelector(
    ({ DebouncedSearchQuerySlice }) => DebouncedSearchQuerySlice.debouncedSearchQuery,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const { data } = await axios.get(
          `${API.BASE_URL}/${API.SEARCH}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${debouncedSearchQuery}`,
        );
        dispatch(setCities(data));
      } catch (err) {
        console.log(err);
      }
    };
    if (debouncedSearchQuery) handleSearch();
  }, [dispatch, debouncedSearchQuery]);
}
