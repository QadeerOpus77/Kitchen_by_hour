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
            initialRouteName={NavigationStrings.BOOK_TOUR}>
            <Stack.Screen
                name={NavigationStrings.BOOK_TOUR}
                component={Screens.BookTour}
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
                name={NavigationStrings.BOOKING_REVIEW}
                component={Screens.BookingReview}
            />

        </Stack.Navigator>
    );
}
