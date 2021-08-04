import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup'
// import EmployeeNavigator from './EmployeeNavigator/EmployeeNavigator';
// import SuperintendentNavigator from './SuperintendentNavigator';

import { navigationRef } from './navigationService';

export default function Navigation(){
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();

function RootNavigator(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
    )
}