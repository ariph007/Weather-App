import React from 'react';
import Search from './Search';

const Header = () => {
  let today = new Date().toLocaleDateString('en-ID', {
    dateStyle: 'long',
  });
  return (
    <div className='flex items-center border-b-[1px] border-b-slate-300 pb-4'>
      <p className='text-lg font-semibold text-slate-900'>{today}</p>
      <Search />
    </div>
  );
};

export default Header;
