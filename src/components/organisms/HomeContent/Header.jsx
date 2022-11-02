import React from 'react';
import Search from './Search';

const Header = () => {
  let today = new Date().toLocaleDateString('en-ID', {
    dateStyle: 'long',
  });
  return (
    <div
      className='flex w-full flex-col border-b-[1px] border-b-slate-300 
    pb-4 sm:flex sm:flex-row sm:items-center'
    >
      <p className='text-left text-lg font-semibold text-slate-900'>{today}</p>
      <Search />
    </div>
  );
};

export default Header;
