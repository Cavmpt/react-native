import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from './AuthNavigator';
import EmployeeNavigator from './EmployeeNavigator/EmployeeNavigator';
import SuperintendentNavigator from './SuperintendentNavigator';
import { navigationRef } from './navigationService';

export default function Navigation(){
    return (
        <NavigationContainer ref={navigationRef}>
            <RootNavigator/>
        </NavigationContainer>
    )
}

const Stack = createStackNavigator();

function RootNavigator(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Authentication" component={AuthNavigator}/>
            <Stack.Screen name="EmployeeApp" component={EmployeeNavigator}/>
            <Stack.Screen name="SuperintendentApp" component={SuperintendentNavigator}/>
        </Stack.Navigator>
    )
}