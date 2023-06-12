import { useEffect, useState } from 'react';

export default function useDebounce(dependancy: any, delay: number) {
  const [debouncedDependancy, setDebouncedDependancy] = useState<any>(dependancy);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedDependancy(dependancy);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [dependancy, delay]);

  return debouncedDependancy;
}
