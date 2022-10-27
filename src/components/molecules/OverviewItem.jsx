import React from 'react';
import { BsWind } from 'react-icons/bs';
import { WiHumidity } from 'react-icons/wi';

const OverviewItem = ({ title, desc }) => {
  return (
    <div className='mt-6'>
      <div
        className='flex h-[80px] w-[250px] items-center justify-between gap-x-8 
    rounded-md bg-slate-200/25 px-4 py-4 hover:shadow-sm'
      >
        {title === 'Wind Speed' ? (
          <BsWind className='text-blue-600' size={32} />
        ) : title === 'Humidity' ? (
          <WiHumidity className='text-blue-600' size={32} />
        ) : title === 'Pressure' ? (
          <img
            src={require('../../assets/image/pressure.png')}
            alt='pressure'
            width={32}
          />
        ) : (
          <img
            src={require('../../assets/image/visible.png')}
            alt='pressure'
            width={32}
          />
        )}
        <div className='flex flex-col'>
          <p className='pb-2 text-sm font-normal text-slate-900'>{title}</p>
          <p className='text-xl font-medium text-slate-900'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewItem;
