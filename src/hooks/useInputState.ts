import { useAppDispatch, useAppSelector } from '../store/store';
import { setDebouncedSearchQuery } from '../store/features/DebouncedSearchQuerySlice';
import { useEffect } from 'react';
import useDebounce from './useDebounce';
import { setInput } from '../store/features/UserInputSlice';

export default function useInputState() {
  const dispatch = useAppDispatch();

  const userInput = useAppSelector(({ UserInputSlice }) => UserInputSlice.input);

  const debouncedSearchQuery = useDebounce(userInput, 500) as string;

  useEffect(() => {
    dispatch(setDebouncedSearchQuery(debouncedSearchQuery));
  }, [debouncedSearchQuery, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInput(e.target.value));
  };

  return { userInput, handleInputChange };
}
