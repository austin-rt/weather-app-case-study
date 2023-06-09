import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(
    null,
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });
      });
    }
  }, []);

  return coordinates ? `${coordinates.latitude},${coordinates.longitude}` : 'Atlanta';
};

export default useGeolocation;
