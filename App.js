import React from 'react';
import {  Text, View } from 'react-native';
import {Provider} from "react-redux";
import {store} from './src/redux' ;
import AppNavigations from './src/navigations';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigations/>
    </Provider>
  );
}

