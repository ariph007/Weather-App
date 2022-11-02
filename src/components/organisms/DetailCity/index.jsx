import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { WiSunrise, WiSunset } from 'react-icons/wi';
import { ContextProvider } from '../../../helper/context';
import TimeServices from '../../../utils/timeServices';

const DetailCity = () => {
  let { currentWeather, loading } = useContext(ContextProvider);
  const weatherIcon = currentWeather?.weather?.[0]?.['icon'];
  const [clock, setClock] = useState(new Date());
  const sunrise = currentWeather?.sys?.sunrise * 1000;
  const sunset = currentWeather?.sys?.sunset * 1000;
  const timeNow = Math.round(new Date().getTime());
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
    <div className='hidden w-3/12 bg-gradient-to-tl  from-blue-600 to-purple-600 px-4 pt-2 sm:flex sm:flex-col'>
      <div className='flex w-full flex-col border-b-[1px] border-b-gray-200/40 pb-4'>
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
      <div className='mt-6'>
        <div className='flex flex-col'>
          <p className='text-sm font-medium text-slate-100'>
            Sunrise and Sunset
          </p>
          <div className='mt-4 flex flex-col gap-y-4'>
            <div
              className='h-[100px] rounded-md border-[1px] border-slate-300/40 
            bg-white bg-opacity-20 px-4 backdrop-blur-sm hover:bg-slate-300 hover:bg-opacity-60'
            >
              <div className='flex h-full items-center justify-between'>
                <div className='flex'>
                  <WiSunrise className='text-slate-100' size={48} />
                  <div className='ml-4 flex flex-col gap-y-1'>
                    <p className='text-xs font-light text-slate-100'>Sunrise</p>
                    <p className='text-lg font-medium text-slate-100'>
                      {TimeServices.getEpochToTime(
                        currentWeather?.sys?.sunrise
                      )}{' '}
                      AM
                    </p>
                  </div>
                </div>
                <p className='text-sm font-light text-slate-100'>
                  {timeNow > sunrise
                    ? TimeServices.getDifferentHours(sunrise) + ' hours ago'
                    : 'in ' +
                      TimeServices.getDifferentHours(sunrise) +
                      ' hours'}
                </p>
              </div>
            </div>
            <div
              className='h-[100px] rounded-md border-[1px] border-slate-300/40 bg-white 
            bg-opacity-20 px-4 backdrop-blur-sm hover:bg-slate-300 hover:bg-opacity-60'
            >
              <div className='flex h-full items-center justify-between'>
                <div className='flex'>
                  <WiSunset className='text-slate-100' size={48} />
                  <div className='ml-4 flex flex-col gap-y-1'>
                    <p className='text-xs font-light text-slate-100'>Sunset</p>
                    <p className='text-lg font-medium text-slate-100'>
                      {TimeServices.getEpochToTime(currentWeather?.sys?.sunset)}{' '}
                      PM
                    </p>
                  </div>
                </div>
                <p className='text-sm font-light text-slate-100'>
                  {timeNow > sunset
                    ? TimeServices.getDifferentHours(sunset) + ' hours ago'
                    : 'in ' + TimeServices.getDifferentHours(sunset) + ' hours'}
                </p>
              </div>
            </div>
            <div className=' m-auto mt-6 flex w-full justify-center'>
              <a href='#_' class='group relative inline-block text-lg'>
                <span class='relative z-10 block overflow-hidden rounded-lg border-2 border-blue-700 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white'>
                  <span class='absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3'></span>
                  <span class='ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-blue-700 transition-all duration-300 group-hover:-rotate-180'></span>
                  <span class='relative'>Add To Map</span>
                </span>
                <span
                  class='absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-blue-700 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0'
                  data-rounded='rounded-lg'
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCity;
