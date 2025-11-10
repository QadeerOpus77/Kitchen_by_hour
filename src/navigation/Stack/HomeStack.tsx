import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={NavigationStrings.HOME}>
            <Stack.Screen
                name={NavigationStrings.HOME}
                component={Screens.Home}
            />
            <Stack.Screen
                name={NavigationStrings.BOOK_KITCHEN}
                component={Screens.BookKitchen}
            />
        </Stack.Navigator>
    );
}
