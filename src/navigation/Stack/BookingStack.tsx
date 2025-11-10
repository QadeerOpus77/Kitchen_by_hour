import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';
// import DrawerStack from './DrawerStack';

const Stack = createStackNavigator();

export default function BookingStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={NavigationStrings.BOOKING}>
            <Stack.Screen
                name={NavigationStrings.BOOKING}
                component={Screens.Booking}
            />
            <Stack.Screen
                name={NavigationStrings.AVAILABILITY}
                component={Screens.Avaliblity}
            />
            <Stack.Screen
                name={NavigationStrings.BOOKING_DETAIL}
                component={Screens.BookingDetail}
            />
            <Stack.Screen
                name={NavigationStrings.PAYMENT}
                component={Screens.Payment}
            />

            {/* <Stack.Screen
                name={NavigationStrings.CHECKIN}
                component={Screens.CheckIn}
            /> */}

        </Stack.Navigator>
    );
}
