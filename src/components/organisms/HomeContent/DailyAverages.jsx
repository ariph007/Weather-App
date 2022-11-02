import React, { useContext, useEffect, useState } from 'react';
import { Area } from '@ant-design/plots';
import axios from 'axios';
import { ContextProvider } from '../../../helper/context';
import WeatherService from '../../../services/weather';

const DailyAverages = () => {
  let { search } = useContext(ContextProvider);
  const [dailyTemp, setDailyTemp] = useState([]);

  const loadDailyTemp = async () => {
    try {
      const response = await WeatherService.getDailyWeather(search);
      setDailyTemp(response);
    } catch (error) {
      const response = await WeatherService.getDailyWeather('jakarta');
      setDailyTemp(response);
    }
  };

  const data = dailyTemp;

  const config = {
    data,
    xField: 'name',
    yField: 'temp',
    xAxis: {
      range: [0, 1],
      tickCount: data.length,
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#C9A7FF 1:#4812DB',
      };
    },
  };

  useEffect(() => {
    loadDailyTemp();
  }, [search]);

  return (
    <div className='mt-6 flex flex-col'>
      <p className='mb-6 text-sm font-medium text-slate-900'>Daily Averages</p>
      <div className='h-[100px] w-full sm:h-[200px]'>
        <Area {...config} />
      </div>
    </div>
  );
};

export default DailyAverages;
