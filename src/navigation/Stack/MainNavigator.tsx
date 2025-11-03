import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationStrings from '../NavigationStrings';
import { RootStackParamList } from '../types/RootStackParamList';
import AuthStack from './AuthStack';
import { navigationRef } from './NavigationRef';
import RoleStack from './RoleStack';
import HomeStack from './HomeStack';
import BottomStack from './BottomStack';
import BookingStack from './BookingStack'

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={NavigationStrings.ROLE_STACK as keyof RootStackParamList} 
      >
        <Stack.Screen
          name={NavigationStrings.ROLE_STACK as keyof RootStackParamList}
          component={RoleStack}
        />
        <Stack.Screen
          name={NavigationStrings.AUTH_STACK as keyof RootStackParamList}
          component={AuthStack}
        />
        <Stack.Screen
          name={NavigationStrings.HOME_STACK as keyof RootStackParamList}
          component={HomeStack}
        />
          <Stack.Screen
            name={NavigationStrings.BOTTOM_STACK as keyof RootStackParamList} // ✅ FIXED HERE
            component={BottomStack}
          />
          <Stack.Screen
            name={NavigationStrings.BOOKING_STACK as keyof RootStackParamList} 
            component={BookingStack}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
