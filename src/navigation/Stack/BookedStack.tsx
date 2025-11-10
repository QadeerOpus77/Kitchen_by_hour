import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';


const Stack = createStackNavigator();

export default function BookedStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={NavigationStrings.SELECT_KITCHEN}>

            <Stack.Screen
                name={NavigationStrings.SELECT_KITCHEN}
                component={Screens.SelectKitchen}
            />
            <Stack.Screen
                name={NavigationStrings.CHECKIN}
                component={Screens.CheckIn}
            />

        </Stack.Navigator>
    );
}
