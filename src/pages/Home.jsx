import React, { useContext, useRef } from 'react';
import { useEffect } from 'react';
import DetailCity from '../components/organisms/DetailCity';
import HomeContent from '../components/organisms/HomeContent';
import Sidebar from '../components/organisms/Sidebar';
import LoadingBar from 'react-top-loading-bar';
import { ContextProvider } from '../helper/context';
import WeatherService from '../services/weather.js';

const Home = () => {
  const ref = useRef(null);
  let { currentWeather, setCurrentWeather, setLoading, search, setError } =
    useContext(ContextProvider);

  const loadCurrentWeather = async () => {
    try {
      setLoading(true);
      ref.current.continuousStart();
      const loadCurrent = await WeatherService.getCurrentWeather(search);
      setTimeout(() => {
        setCurrentWeather(loadCurrent);
        setLoading(false);
        ref.current.complete();
      }, 1000);
    } catch (error) {
      setLoading(true);
      ref.current.continuousStart();
      const loadCurrent = await WeatherService.getCurrentWeather('jakarta');
      setTimeout(() => {
        setCurrentWeather(loadCurrent);
        setLoading(false);
        ref.current.complete();
      }, 1000);
      setError(error.response.data.message);
    }
  };
  useEffect(() => {
    loadCurrentWeather();
  }, [search]);

  return (
    <div className='flex h-screen w-screen flex-row'>
      <LoadingBar color='#2449EB' ref={ref} shadow={true} />
      <Sidebar activeMenu='home' />
      <HomeContent />
      <DetailCity />
    </div>
  );
};

export default Home;
