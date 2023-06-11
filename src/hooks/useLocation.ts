import axios from 'axios';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/store';
import { setCity } from '../store/features/CitySlice';

export default function useLocation() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        dispatch(setCity(`${latitude},${longitude}`));
      });
    } else {
      const fetchIpLocation = async () => {
        const { data }: { data: IpData } = await axios.get('http://ip-api.com/json/?fields=61439');
        dispatch(setCity(`${data.lat},${data.lon}`));
      };
      fetchIpLocation();
    }
  }, [dispatch]);
}
