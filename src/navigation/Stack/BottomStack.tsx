import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Animated,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { useNavigationState } from '@react-navigation/native';
import * as Screens from '../../screens';
import { COLORS, FONTS, images, SIZES } from '../../constant';
import HomeStack from './HomeStack';
import NavigationStrings from '../NavigationStrings';
import BookedStack from './BookedStack';
import { navigate } from './NavigationRef';
import { RootStackParamList } from '../types/RootStackParamList';

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

  // const handlePress = (navigate: (routeName: string) => void) => {
  //   Animated.sequence([
  //     Animated.spring(scale, {
  //       toValue: 1.2,
  //       friction: 2,
  //       useNativeDriver: true,
  //     }),
  //     Animated.spring(scale, {
  //       toValue: 1,
  //       friction: 3,
  //       useNativeDriver: true,
  //     }),
  //   ]).start(() => {
  //     setSelectedTab(NavigationStrings.BOOKING_STACK);
  //     navigate(NavigationStrings.BOOKED_STACK);
  //   });
  // };
  const handlePress = () => navigate({
    name: NavigationStrings.BOOKED_STACK as keyof RootStackParamList,

  })

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
      height={70}
      circleWidth={50}
      bgColor={COLORS.white}
      initialRouteName={NavigationStrings.HOME_STACK}
      circlePosition="CENTER"
      backBehavior="initialRoute"
      renderCircle={({ navigate }: RenderCircleProps) => (
        <View style={styles.scanContainer}>
          <Animated.View style={[styles.btnCircleUp, { transform: [{ scale }] }]}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => handlePress()}>
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
        name={NavigationStrings.BOOKED_STACK} // Changed to BOOKING_STACK
        position="CENTER"
        component={BookedStack} // Use BookingStack component
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

// ✅ Helper functions - Updated to use BOOKING_STACK
const getTabIcon = (routeName: string): any => {
  switch (routeName) {
    case NavigationStrings.HOME_STACK:
      return images.home;
    case NavigationStrings.CALENDER:
      return images.calender;
    case NavigationStrings.BOOKED_STACK: // Updated
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
    case NavigationStrings.BOOKED_STACK: // Updated
      return 'Check In';
    case NavigationStrings.ALERTS:
      return 'Alerts';
    case NavigationStrings.MORE:
      return 'More';
    default:
      return 'Home';
  }
};

// ✅ Styles (same as before)
const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    // iOS shadow
    shadowColor: '#656565ff',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Android shadow
    elevation: 10, // Lower = crisper, Higher = blurrier (try between 6–10)
    backgroundColor: 'transparent', // Required for elevation to cast correctly on Android
    // borderTopLeftRadius: 12,
    // borderTopRightRadius: 12,
  },
  scanContainer: {
    alignItems: 'center',
    bottom: SIZES.height * 0.02,
  },
  btnCircleUp: {},
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
    // marginTop: SIZES.margin / 9,
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