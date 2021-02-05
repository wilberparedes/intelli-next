import React, { useEffect, useState  } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor, actions } from './src/store';

import AppStack from './src/routes/app';

const App = () => {

  useEffect(() => {
    AsyncStorage.setItem('@permission', 'no');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStack/>
      </PersistGate>
    </Provider>
  );
};

export default App;
