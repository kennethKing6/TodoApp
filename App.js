import React from 'react';
import {  Text, View } from 'react-native';
import {Provider} from "react-redux";
import {store,persistor} from './src/redux' ;
import AppNavigations from './src/navigations';
import { PersistGate } from 'redux-persist/integration/react'


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AppNavigations/>
      </PersistGate>
    </Provider>
  );
}

