import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Navigation from './routes/root-router'
import {store} from './store/root-reducer'
import {Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}