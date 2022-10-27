import React, { useState } from 'react';
export const ContextProvider = React.createContext(null);

export const ContextWrapper = (props) => {
  const [currentWeather, setCurrentWeather] = useState([]);

  return (
    <ContextProvider.Provider
      value={{
        currentWeather,
        setCurrentWeather,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};
