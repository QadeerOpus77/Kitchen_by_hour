import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Animated,
  Keyboard,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { useNavigationState } from '@react-navigation/native';
import * as Screens from '../../screens';
import { COLORS, FONTS, images, SIZES } from '../../constant';
import HomeStack from './HomeStack';
import NavigationStrings from '../NavigationStrings';

interface TabBarProps {
  routeName: string;
  selectedTab: string;
  navigate: (routeName: string) => void;
}

export default function BottomStack(): React.JSX.Element {
  const scale = useRef(new Animated.Value(1)).current;
  const CurvedNavigator: any = CurvedBottomBar.Navigator;
  type RenderCircleProps = { navigate: (routeName: string) => void };

  const [selectedTab, setSelectedTab] = useState(NavigationStrings.HOME_STACK);

  const currentRoute = useNavigationState((state) => {
    if (!state) return NavigationStrings.BOTTOM_STACK;
    const route = state.routes[state.index];
    return route.name;
  });

  useEffect(() => {
    if (currentRoute) {
      setSelectedTab(currentRoute);
    }
  }, [currentRoute]);

  const handlePress = (navigate: (routeName: string) => void) => {
    Animated.sequence([
      Animated.spring(scale, {
        toValue: 1.2,
        friction: 2,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start(() => navigate(NavigationStrings.CHECKIN));
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }: TabBarProps) => {
    const isActive = selectedTab === routeName;
    return (
      <TouchableOpacity
        key={routeName}
        style={styles.tabButton}
        activeOpacity={0.8}
        onPress={() => {
          setSelectedTab(routeName);
          navigate(routeName);
        }}>
        <Image
          source={getTabIcon(routeName)}
          style={[styles.tabIcon, isActive && styles.activeIcon]}
          resizeMode="contain"
        />
        <Text style={[styles.tabText, isActive && styles.activeText]}>
          {getTabLabel(routeName)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <CurvedNavigator
      type="DOWN"
      style={styles.bottomBar}
      height={80}
      circleWidth={60}
      bgColor={COLORS.white}
      initialRouteName={NavigationStrings.HOME_STACK}
      circlePosition="CENTER"
      backBehavior="initialRoute"
      renderCircle={({ navigate }: RenderCircleProps) => (
        <View style={styles.scanContainer}>
          <Animated.View style={[styles.btnCircleUp, { transform: [{ scale }] }]}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.button}
              onPress={() => handlePress(navigate)}>
              <Image source={images.checkIn} style={styles.centerIcon} resizeMode="contain" />
            </TouchableOpacity>
          </Animated.View>
          <Text style={styles.scanText}>Check In</Text>
        </View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name={NavigationStrings.HOME_STACK}
        position="LEFT"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name={NavigationStrings.CALENDER}
        position="LEFT"
        component={Screens.Calender}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name={NavigationStrings.CHECKIN}
        position="CENTER"
        component={Screens.CheckIn}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name={NavigationStrings.ALERTS}
        position="RIGHT"
        component={Screens.Alerts}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name={NavigationStrings.MORE}
        position="RIGHT"
        component={Screens.more}
        options={{ headerShown: false }}
      />
    </CurvedNavigator>
  );
}

// ✅ Helper functions
const getTabIcon = (routeName: string): any => {
  switch (routeName) {
    case NavigationStrings.HOME_STACK:
      return images.home;
    case NavigationStrings.CALENDER:
      return images.calender;
    case NavigationStrings.CHECKIN:
      return images.checkIn;
    case NavigationStrings.ALERTS:
      return images.alerts;
    case NavigationStrings.MORE:
      return images.menu;
    default:
      return images.home;
  }
};

const getTabLabel = (routeName: string): string => {
  switch (routeName) {
    case NavigationStrings.HOME_STACK:
      return 'Home';
    case NavigationStrings.CALENDER:
      return 'Calender';
    case NavigationStrings.CHECKIN:
      return 'Check In';
    case NavigationStrings.ALERTS:
      return 'Alerts';
    case NavigationStrings.MORE:
      return 'More';
    default:
      return 'Home';
  }
};

// ✅ Styles
const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    shadowColor: '#7c7c7cff',
    shadowOffset: {
      width: 1,
      height: -2, // 👈 negative height means shadow appears on top
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 15, // 👈 for Android shadow
  },

  scanContainer: {
    alignItems: 'center',
    bottom: SIZES.height * 0.02,
  },
  btnCircleUp: {
    // borderRadius: SIZES.radius,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    width: SIZES.width * 0.15,
    height: SIZES.width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius * 10,
    backgroundColor: COLORS.ThemeColor,
  },
  centerIcon: {
    width: SIZES.large * 1.5,
    height: SIZES.large * 2,
    tintColor: COLORS.white,
  },
  scanText: {
    marginTop: SIZES.margin * 0.4,
    ...FONTS.Medium10,
    color: COLORS.ThemeColor,
    fontWeight: '600',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: SIZES.large,
    height: SIZES.large,
    tintColor: COLORS.gray,
  },
  activeIcon: {
    tintColor: COLORS.ThemeColor,
  },
  tabText: {
    ...FONTS.Medium10,
    color: COLORS.gray,
  },
  activeText: {
    color: COLORS.black,
  },
});
