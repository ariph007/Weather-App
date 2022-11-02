import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ContextProvider } from '../../../helper/context';

const DetailCity = () => {
  let { currentWeather, loading } = useContext(ContextProvider);
  const weatherIcon = currentWeather?.weather?.[0]?.['icon'];
  const [clock, setClock] = useState(new Date());
  const refreshClock = () => {
    setClock(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanUp() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className='hidden w-3/12 bg-gradient-to-tl  from-blue-600 to-purple-600 px-4 pt-2 sm:flex'>
      <div className='flex w-full flex-col border-b-[1px] border-b-slate-300 pb-4'>
        <div className='flex justify-between'>
          <p className='text-lg font-medium text-slate-100'>
            {loading ? 'Loading...' : currentWeather?.name}
          </p>
          <p id='time' className='text-lg font-medium text-slate-100'>
            {clock.toLocaleTimeString()}
          </p>
        </div>
        <div className='flex flex-col items-center justify-between pt-6'>
          <div className='flex flex-col'>
            <img
              src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              alt='cloud'
            />
          </div>
          <div className='flex w-full justify-between'>
            <p className='w-1/2 items-center self-center text-lg font-medium text-slate-100'>
              {currentWeather?.main?.temp} °C
            </p>
            <p className='w-1/2 items-center text-lg font-medium capitalize text-slate-100'>
              {currentWeather?.weather?.[0]?.['description']}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCity;
