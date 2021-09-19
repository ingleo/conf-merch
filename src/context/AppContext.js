import React from 'react';
import useInitialState from '../hooks/useInitialState';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.state).length;

  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
      ) : (
        <h1> Cargando ...</h1>
      )}
    </>
  );
};

export default AppProvider;
