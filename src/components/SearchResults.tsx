import useFetchCities from '../hooks/useFetchCities';
import useSelectCity from '../hooks/useSelectCity';
import { useAppSelector } from '../store/store';

export default function SearchResults() {
  useFetchCities();
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);
  const cities = useAppSelector(({ SearchResultsSlice }) => SearchResultsSlice.cities);
  const { handleCityClick } = useSelectCity();
  return (
    <div className='flex flex-col gap-2'>
      {/* before mapping through, it should filter out the city currently stored in state */}
      {cities &&
        cities
          .filter(city => city.lat !== weather?.location.lat && city.lon !== weather?.location.lon)
          .map(city => (
            <button
              onClick={() => {
                handleCityClick(city.id);
              }}
              key={city.id}
              data-cityid={city.id}
              className='rounded-xl border-2 border-slate-100 border-opacity-30 bg-transparent p-4 text-center transition-all duration-300 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-opacity-50 active:border-opacity-50 active:bg-slate-100 active:bg-opacity-10'
            >
              {city.name}, {city.region}, {city.country}
            </button>
          ))}
    </div>
  );
}
