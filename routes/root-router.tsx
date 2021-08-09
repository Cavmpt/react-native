import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabsNavigator } from '@react-navigation/bottom-Tabs';
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Main from '../screens/Alerts'

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <TabsNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator()

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Alerts' component={Main} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

const Tabs = createBottomTabsNavigator()

function TabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Alerts" component={Main} />
    </Tabs.Navigator>
  )
}
