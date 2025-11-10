import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={NavigationStrings.PROFILE}>
            <Stack.Screen
                name={NavigationStrings.PROFILE}
                component={Screens.Profile}
            />
            <Stack.Screen
                name={NavigationStrings.MY_BOOKINGS}
                component={Screens.MyBookings}
            />

        </Stack.Navigator>
    );
}
