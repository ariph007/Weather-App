import React, { useContext } from 'react';
import { useEffect } from 'react';
import DetailCity from '../components/organisms/DetailCity';
import HomeContent from '../components/organisms/HomeContent';
import ProgressLoading from '../components/organisms/ProgressLoading';
import Sidebar from '../components/organisms/Sidebar';
import { ContextProvider } from '../helper/context';
import WeatherService from '../services/weather.js';

const Home = () => {
  let { currentWeather, setCurrentWeather, setLoading, search, setError } =
    useContext(ContextProvider);

  const loadCurrentWeather = async () => {
    try {
      setLoading(true);
      const loadCurrent = await WeatherService.getCurrentWeather(search);
      console.log(loadCurrent);
      setTimeout(() => {
        setCurrentWeather(loadCurrent);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(true);
      const loadCurrent = await WeatherService.getCurrentWeather('jakarta');
      setTimeout(() => {
        setCurrentWeather(loadCurrent);
        setLoading(false);
      }, 1000);
      setError(error.response.data.message);
    }
  };
  useEffect(() => {
    loadCurrentWeather();
  }, [search]);

  if (currentWeather === undefined || currentWeather.length === 0) {
    return <ProgressLoading />;
  }
  return (
    <div className='flex h-screen w-screen flex-row'>
      <Sidebar activeMenu='home' />
      <HomeContent />
      <DetailCity />
    </div>
  );
};

export default Home;
