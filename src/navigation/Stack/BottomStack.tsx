import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types/RootStackParamList';
import * as Screens from '../../screens';
import NavigationStrings from '../NavigationStrings';
import { COLORS, FONTS, images, SIZES } from '../../constant';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<RootStackParamList>();

function AnimatedTabIcon({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) {
  const scale = useRef(new Animated.Value(focused ? 1.15 : 1)).current;

  useEffect(() => {
    Animated.timing(scale, {
      toValue: focused ? 1.15 : 1,
      duration: 220,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [focused, scale]);

  return (
    <View style={styles.iconContainer}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Image
          source={icon}
          style={[
            styles.iconImage,
            { tintColor: focused ? COLORS.ThemeColor : COLORS.inActiveColor },
          ]}
        />
      </Animated.View>
      <Text
        style={[
          styles.iconText,
          { color: focused ? COLORS.ThemeColor : COLORS.inActiveColor },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

export default function BottomStack({ navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName={NavigationStrings.HOME as keyof RootStackParamList}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabBar,
          { paddingBottom: insets.bottom ? insets.bottom : 8 },
        ],
        tabBarIcon: ({ focused }) => {
          let icon = images.home;
          let title = 'Home';
          switch (route.name) {
            case NavigationStrings.HOME:
              icon = images.home;
              title = 'Home';
              break;
            case NavigationStrings.CALENDER:
              icon = images.calender;
              title = 'Calendar';
              break;
            case NavigationStrings.CHECKIN:
              icon = images.checkIn;
              title = 'CheckIn';
              break;
            case NavigationStrings.ALERTS:
              icon = images.alerts;
              title = 'Alerts';
              break;
            case NavigationStrings.MENU:
              icon = images.menu;
              title = 'Menu';
              break;
          }
          return <AnimatedTabIcon focused={focused} icon={icon} title={title} />;
        },
      })}
    >
      <Tab.Screen
        name={NavigationStrings.HOME as keyof RootStackParamList}
        component={Screens.Home}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            const state = navigation.getState();
            const currentRoute = state.routes[state.index];

            // If user already on Home tab, reload its initial screen
            if (currentRoute.name === NavigationStrings.HOME) {
              e.preventDefault();
              navigation.reset({
                index: 0,
                routes: [{ name: NavigationStrings.HOME }],
              });
            }
          },
        })}
      />
      <Tab.Screen
        name={NavigationStrings.CALENDER as keyof RootStackParamList}
        component={Screens.Calender}
      />
      <Tab.Screen
        name={NavigationStrings.CHECKIN as keyof RootStackParamList}
        component={Screens.CheckIn}
      />
      <Tab.Screen
        name={NavigationStrings.ALERTS as keyof RootStackParamList}
        component={Screens.Alerts}
      />
      <Tab.Screen
        name={NavigationStrings.MENU as keyof RootStackParamList}
        component={Screens.Menu}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.white,
    height: SIZES.height * 0.08,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 10,
    borderTopWidth: 0,
    padding: SIZES.padding * 2,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.h22,
    width: SIZES.width * 0.18,
  },
  iconImage: {
    width: SIZES.h22,
    height: SIZES.h22,
    resizeMode: 'contain',
  },
  iconText: {
    ...FONTS.Medium10,
    marginTop: 2,
  },
});
