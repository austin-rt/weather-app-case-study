import useInputState from '../hooks/useInputState';
import { useAppSelector } from '../store/store';

export default function SearchInput() {
  const userInput = useAppSelector(({ UserInputSlice }) => UserInputSlice.input);
  const { handleInputChange } = useInputState();

  return (
    <input
      type='text'
      placeholder='Search for a city or zip code'
      className='w-96 cursor-text rounded-xl border-2 border-slate-100 border-opacity-20 bg-transparent p-3 text-center text-sm transition-all duration-300 placeholder:text-slate-100 placeholder:text-opacity-40 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-opacity-10 active:border-opacity-50 active:bg-slate-100 active:bg-opacity-10 sm:p-4'
      value={userInput}
      onChange={e => {
        handleInputChange(e);
      }}
    />
  );
}
