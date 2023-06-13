import { useCallback } from 'react';
import { setCity } from '../store/features/CitySlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import useInputState from './useInputState';

export default function useSelectCity() {
  const cities = useAppSelector(({ SearchResultsSlice }) => SearchResultsSlice.cities);

  // const { clearSearchQuery } = useInputState();

  const dispatch = useAppDispatch();

  const handleCityClick = useCallback(
    (cityId: number) => {
      const selectedCity = cities.find(city => city.id === Number(cityId));
      if (selectedCity) {
        dispatch(setCity(selectedCity));
        // dispatch for this to work
        // clearSearchQuery();
      }
    },
    [cities, dispatch /* clearSearchQuery */],
  );

  return { handleCityClick };
}
