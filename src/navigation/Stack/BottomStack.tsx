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
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const currentRoute = useNavigationState((state) => {
    const route = state.routes[state.index];
    if ('state' in route && route.state && 'routes' in route.state) {
      const nested = route.state as any;
      return nested.routes[nested.index]?.name || route.name;
    }
    return route.name;
  });

  useEffect(() => {
    if (currentRoute) {
      setSelectedTab(currentRoute);
    }
  }, [currentRoute]);

  // 👇 Handle keyboard visibility
  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const handlePress = () => navigate({
    name: NavigationStrings.BOOKED_STACK as keyof RootStackParamList,
  });

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

  const shouldHideTabBar = currentRoute?.includes('Profile') || keyboardVisible;

  return (
    <CurvedNavigator
      type="DOWN"
      height={60}
      circleWidth={50}
      bgColor={COLORS.white}
      initialRouteName={NavigationStrings.HOME_STACK}
      circlePosition="CENTER"
      backBehavior="initialRoute"
      renderCircle={({ navigate }: RenderCircleProps) => (
        !shouldHideTabBar && (
          <View style={styles.scanContainer}>
            <Animated.View style={[styles.btnCircleUp, { transform: [{ scale }] }]}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.button}
                onPress={handlePress}>
                <Image source={images.checkIn} style={styles.centerIcon} resizeMode="contain" />
              </TouchableOpacity>
            </Animated.View>
            <Text style={styles.scanText}>Check In</Text>
          </View>
        )
      )}
      tabBar={shouldHideTabBar ? () => null : renderTabBar}
      style={shouldHideTabBar ? { display: 'none' } : styles.bottomBar}
    >
      <CurvedBottomBar.Screen
        name={NavigationStrings.HOME_STACK}
        position="LEFT"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name={NavigationStrings.AVAILABILITY}
        position="LEFT"
        component={Screens.Avaliblity}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name={NavigationStrings.BOOKED_STACK}
        position="CENTER"
        component={BookedStack}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name={NavigationStrings.ALERTS}
        position="RIGHT"
        component={Screens.Alerts}
        options={{ headerShown: false }}
      />
      <CurvedBottomBar.Screen
        name={NavigationStrings.PROFILE_STACK}
        position="RIGHT"
        component={Screens.Profile}
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
    case NavigationStrings.AVAILABILITY:
      return images.calender;
    case NavigationStrings.BOOKED_STACK:
      return images.checkIn;
    case NavigationStrings.ALERTS:
      return images.alerts;
    case NavigationStrings.PROFILE_STACK:
      return images.user;
    default:
      return images.home;
  }
};

const getTabLabel = (routeName: string): string => {
  switch (routeName) {
    case NavigationStrings.HOME_STACK:
      return 'Home';
    case NavigationStrings.AVAILABILITY:
      return 'Calender';
    case NavigationStrings.BOOKED_STACK:
      return 'Check In';
    case NavigationStrings.ALERTS:
      return 'Alerts';
    case NavigationStrings.PROFILE_STACK:
      return 'Profile';
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
    shadowColor: '#656565ff',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
    backgroundColor: 'transparent',
  },
  scanContainer: {
    alignItems: 'center',
    bottom: SIZES.height * 0.02,
  },
  btnCircleUp: {},
  button: {
    width: SIZES.width * 0.13,
    height: SIZES.width * 0.13,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius * 10,
    backgroundColor: COLORS.ThemeColor,
  },
  centerIcon: {
    width: SIZES.large * 1.5,
    height: SIZES.large * 1.5,
    tintColor: COLORS.white,
  },
  scanText: {
    marginTop: SIZES.margin / 2.5,
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
    marginTop: SIZES.margin
  },
  activeIcon: {
    tintColor: COLORS.ThemeColor,
  },
  tabText: {
    ...FONTS.Medium10,
    color: COLORS.gray,
  },
  activeText: {
    color: COLORS.ThemeColor,
  },
});
