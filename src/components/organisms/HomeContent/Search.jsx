import React, { useContext } from 'react';
import { useEffect } from 'react';
import { ContextProvider } from '../../../helper/context';

const Search = () => {
  let { search, setSearch, error, setError } = useContext(ContextProvider);

  const searchHandler = (e) => {
    if (e.keyCode === 13) {
      setSearch(e.target.value);
    }
  };

  const searchChangeHandler = () => {
    setError('');
  };

  useEffect(() => {
    const timeOut = setTimeout(() => 1000);
    return () => clearTimeout(timeOut);
  }, [search]);

  return (
    <div className='mx-auto w-full sm:w-auto'>
      <div className='relative flex h-10 w-full items-center overflow-hidden rounded-lg border-2 focus-within:border-blue-300'>
        <div className='grid h-full w-10 place-items-center text-gray-300'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <input
          className='peer h-full w-full pr-2 text-sm text-gray-700 outline-none'
          type='text'
          id='search'
          placeholder='Search city'
          onKeyDown={searchHandler}
          onChange={searchChangeHandler}
        />
      </div>
      <div className='text-xs font-medium text-red-600'>{error}</div>
    </div>
  );
};

export default Search;
