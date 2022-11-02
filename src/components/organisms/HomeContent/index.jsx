import React from 'react';
import DailyAverages from './DailyAverages';
import Header from './Header';
import Overview from './Overview';

export default function HomeContent() {
  return (
    <div className=' bg-white px-4 pt-2 sm:w-7/12'>
      <Header />
      <Overview />
      <DailyAverages />
    </div>
  );
}
