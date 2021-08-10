import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './routes/root-router'
import {store} from './store/root-reducer'
import {Provider} from 'react-redux'

import SocketConfig from './config/socket-config'

export default function App() {
  return (
  <Provider store={store}>
    <SocketConfig>
      <Navigation/>
    </SocketConfig>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});