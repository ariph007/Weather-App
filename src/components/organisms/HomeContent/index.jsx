import React from 'react';
import Header from './Header';
import Overview from './Overview';

export default function HomeContent() {
  return (
    <div className='w-7/12 bg-white px-4 pt-2'>
      <Header />
      <Overview />
    </div>
  );
}
