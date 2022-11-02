import React, { useContext } from 'react';
import { ContextProvider } from '../../../helper/context';
import OverviewItem from '../../molecules/OverviewItem';

const Overview = () => {
  let { currentWeather } = useContext(ContextProvider);
  return (
    <div className='mt-6 border-b-[1px] border-b-slate-300 pb-8'>
      <p className='text-sm font-medium text-slate-900'>Today overview</p>
      <div className='flex flex-col px-12 sm:grid sm:grid-cols-2'>
        <OverviewItem
          title='Wind Speed'
          desc={`${currentWeather?.wind?.speed} km/h`}
        />
        <OverviewItem
          title='Humidity'
          desc={`${currentWeather?.main?.humidity} %`}
        />
        <OverviewItem
          title='Pressure'
          desc={`${currentWeather?.main?.pressure} hPa`}
        />
        <OverviewItem
          title='Visibility'
          desc={`${currentWeather?.visibility / 1000} km`}
        />
      </div>
    </div>
  );
};

export default Overview;
