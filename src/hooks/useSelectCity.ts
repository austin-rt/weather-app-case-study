import { useCallback } from 'react';
import { setCity } from '../store/features/CitySlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setInput } from '../store/features/UserInputSlice';

export default function useSelectCity() {
  const cities = useAppSelector(({ SearchResultsSlice }) => SearchResultsSlice.cities);

  const dispatch = useAppDispatch();

  const handleCityClick = useCallback(
    (cityId: number) => {
      const selectedCity = cities.find(city => city.id === Number(cityId));
      if (selectedCity) {
        dispatch(setCity(selectedCity));
        dispatch(setInput(''));
      }
    },
    [cities, dispatch],
  );

  return { handleCityClick };
}
