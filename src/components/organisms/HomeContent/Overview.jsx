import React from 'react';
import OverviewItem from '../../molecules/OverviewItem';

const Overview = () => {
  return (
    <div className='mt-6'>
      <p className='text-sm font-medium text-slate-900'>Today overview</p>
      <div className='grid grid-cols-2 px-12'>
        <OverviewItem title='Wind Speed' desc='12 km/h' />
        <OverviewItem title='Humidity' desc='77%' />
        <OverviewItem title='Pressure' desc='1009 hPa' />
        <OverviewItem title='Visibility' desc='1 km' />
      </div>
    </div>
  );
};

export default Overview;
