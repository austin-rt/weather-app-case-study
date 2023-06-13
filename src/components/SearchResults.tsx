import useFetchCities from '../hooks/useFetchCities';
import useSelectCity from '../hooks/useSelectCity';
import { useAppSelector } from '../store/store';

export default function SearchResults() {
  useFetchCities();
  const weather = useAppSelector(({ WeatherSlice }) => WeatherSlice.weather);
  const cities = useAppSelector(({ SearchResultsSlice }) => SearchResultsSlice.cities);
  const debouncedSearchQuery = useAppSelector(
    ({ DebouncedSearchQuerySlice }) => DebouncedSearchQuerySlice.debouncedSearchQuery,
  );

  const { handleCityClick } = useSelectCity();
  return (
    <>
      {debouncedSearchQuery && (
        <section className='flex flex-wrap justify-center gap-2 pt-2'>
          {cities &&
            cities
              .filter(
                city => city.lat !== weather?.location.lat && city.lon !== weather?.location.lon,
              )
              .map(city => (
                <button
                  onClick={() => {
                    handleCityClick(city.id);
                  }}
                  key={city.id}
                  data-cityid={city.id}
                  className='cursor-pointer rounded-xl border-2 border-slate-100 border-opacity-20 bg-transparent px-3 py-5 text-center text-sm transition-all duration-300 placeholder:text-slate-100 placeholder:text-opacity-40 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-opacity-10 active:border-opacity-50 active:bg-slate-100 active:bg-opacity-10 sm:p-4'
                >
                  {city.name}, {city.region}
                </button>
              ))}
        </section>
      )}
    </>
  );
}
