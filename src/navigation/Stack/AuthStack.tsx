import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={NavigationStrings.SIGN_IN}>
            <Stack.Screen
                name={NavigationStrings.SIGN_IN}
                component={Screens.SignIn}
            />
            <Stack.Screen
                name={NavigationStrings.SIGN_UP}
                component={Screens.SignUp}
            />
            <Stack.Screen
                name={NavigationStrings.FORGOT_PASSWORD}
                component={Screens.ForgotPassword}
            />
            <Stack.Screen
                name={NavigationStrings.OTP}
                component={Screens.OTP}
            />
            <Stack.Screen
                name={NavigationStrings.NEW_PASSWORD}
                component={Screens.NewPassword}
            />
        </Stack.Navigator>
    );
}
