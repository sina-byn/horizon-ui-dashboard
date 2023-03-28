import { useContext } from 'react';
import clsx from 'clsx';

//* context
import { SearchContext } from '../context/SearchContextProvider';

const SearchBox = () => {
  const { setQuery } = useContext(SearchContext)!;
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  return (
    <div
      className={clsx(
        'search-field self-end flex items-center h-10 sm:h-full max-w-full relative',
        'bg-white sm:bg-light dark:bg-d-primary dark:sm:bg-d-primary-dark',
        'rounded-full gap-x-2 px-4'
      )}
    >
      <i className='fa-solid fa-search fa-xs mt-0.5' />
      <input
        type='text'
        onChange={searchHandler}
        placeholder='Search'
        className='bg-transparent w-[8.3rem] sm:w-auto text-black dark:text-white text-sm outline-0 rounded-full dark:placeholder:text-white'
      />
    </div>
  );
};

export default SearchBox;
