import useInputState from '../hooks/useInputState';

/**
 *
 * @description This component intentionally excludes a form element to prevent the user from submitting and eliminate the need for a redundant onSubmit function.
 */
export default function SearchInput() {
  const { searchQuery, handleInputChange } = useInputState();

  return (
    <input
      type='text'
      placeholder='Search for a city'
      className='mr-4 rounded-xl border-2 border-slate-100 border-opacity-30 bg-transparent p-4 text-center transition-all duration-300 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-opacity-50 active:border-opacity-50 active:bg-slate-100 active:bg-opacity-10'
      value={searchQuery}
      onChange={e => {
        handleInputChange(e);
      }}
    />
  );
}
