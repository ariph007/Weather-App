import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import HomeContent from '../components/organisms/HomeContent';
import Sidebar from '../components/organisms/Sidebar';
import { ContextProvider } from '../helper/context';
import WeatherService from '../services/weather.js';

const Home = () => {
  const [dailyTemp, setDailyTemp] = useState([]);
  // const [currentWeather, setCurrentWeather] = useState([]);
  let { currentWeather, setCurrentWeather } = useContext(ContextProvider);
  const [search, setSearch] = useState('jakarta');
  // const getDailyTemp = async () => {
  //   await axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API}`
  //     )
  //     .then((result) => {
  //       console.log(result.data.list);
  //       setDailyTemp(result.data.list);
  //       const temp = result.data.list;

  //       let objTemp = {};
  //       for (const data of temp) {
  //         let date = new Date(data.dt_txt).toLocaleDateString('en-ID', {
  //           dateStyle: 'long',
  //         });
  //         objTemp[date] = data.main.temp;
  //       }
  //       console.log(objTemp);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const loadCurrentWeather = async () => {
    const loadCurrent = await WeatherService.getCurrentWeather(search);
    setCurrentWeather(loadCurrent);
  };
  useEffect(() => {
    // getDailyTemp();
    loadCurrentWeather();
    console.log(currentWeather);
  }, []);
  return (
    <div className='flex h-screen w-screen flex-row'>
      <Sidebar activeMenu='home' />
      <HomeContent />
      <div className='w-3/12 bg-yellow-400 pr-4 pt-2'>
        <p>{currentWeather?.main.temp}</p>
      </div>
    </div>
  );
};

export default Home;
