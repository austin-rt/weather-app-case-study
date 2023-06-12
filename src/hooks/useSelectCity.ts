import { useCallback } from 'react';
import { setCity } from '../store/features/CitySlice';
import { useAppDispatch } from '../store/store';

export default function useSelectCity(cities: SearchQueryLocation[]) {
  const dispatch = useAppDispatch();

  const handleCityClick = useCallback(
    (cityId: number) => {
      const selectedCity = cities.find(city => city.id === Number(cityId));
      if (selectedCity) {
        dispatch(setCity(selectedCity));
      }
    },
    [cities, dispatch],
  );

  return { handleCityClick };
}
