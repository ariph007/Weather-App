import React, { useState } from 'react';
export const ContextProvider = React.createContext(null);

export const ContextWrapper = (props) => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [search, setSearch] = useState('jakarta');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <ContextProvider.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        loading,
        setLoading,
        search,
        setSearch,
        error,
        setError,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};
