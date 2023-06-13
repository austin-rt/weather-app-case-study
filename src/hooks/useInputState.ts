import { useAppDispatch } from '../store/store';
import { setDebouncedSearchQuery } from '../store/features/DebouncedSearchQuerySlice';
import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

export default function useInputState() {
  const dispatch = useAppDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500) as string;

  // move to slice for this to work
  // const clearSearchQuery = () => {
  //   setSearchQuery('');
  // };

  useEffect(() => {
    dispatch(setDebouncedSearchQuery(debouncedSearchQuery));
  }, [debouncedSearchQuery, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return { searchQuery, handleInputChange /* clearSearchQuery */ };
}
