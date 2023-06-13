import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/store';
import { setCity } from '../store/features/CitySlice';
import { API } from '../lib/constants';

export default function useLocation() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const successCallback = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      dispatch(setCity({ lat: latitude, lon: longitude }));
    };

    const errorCallback = (error: GeolocationPositionError) => {
      if (error.code === error.PERMISSION_DENIED) {
        fetchIpLocation();
      }
    };

    const fetchIpLocation = async () => {
      try {
        const { data }: { data: IpData } = await axios.get(API.IP_FALLBACK);
        dispatch(setCity({ lat: data.lat, lon: data.lon }));
      } catch (error) {
        console.log('Error fetching IP location:', error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, [dispatch]);
}
