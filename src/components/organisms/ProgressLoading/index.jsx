import React, { useContext, useEffect, useState } from 'react';
import { ContextProvider } from '../../../helper/context';

const ProgressLoading = () => {
  let [loadingPercent, setLoadingPercent] = useState(0);
  const { loading } = useContext(ContextProvider);
  useEffect(() => {
    let counter = 1;
    const interval = setInterval(() => {
      counter++;
      setLoadingPercent(counter);
      if (!loading) {
        setLoadingPercent(100);
      }
      if (counter === 100) {
        clearInterval(interval);
      }
    }, 400);
  }, []);

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      <p className='mb-4 text-sm font-medium text-slate-900'>Loading...</p>
      <div className='w-1/3 rounded-full bg-gray-200 dark:bg-gray-700'>
        <div
          className='rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100'
          style={{ width: `${loadingPercent}%` }}
        >
          {' '}
          {loadingPercent}%
        </div>
      </div>
    </div>
  );
};

export default ProgressLoading;
