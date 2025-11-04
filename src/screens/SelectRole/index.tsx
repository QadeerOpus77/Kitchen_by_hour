import React, { useEffect, useRef } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing,
} from 'react-native';
import { images, COLORS } from '../../constant';
import { Container, LogoContainer, Loader, Button, AuthFooter } from '../../Components';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import styles from './style';
import { useAuthState } from '../../redux/Hook/authHooks'; // 
import { RoleType } from '../../redux/Enums/RoleEnum';
import { useRoleDispatch } from '../../redux/Hook/useRole';


const SelectRole: React.FC = () => {
  const { loading, error, isAuthenticated } = useAuthState(); // ✅ fetch state values

  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.5)).current;

  const { setRole } = useRoleDispatch();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start();
  }, [opacity, scale]);

  const handleLogin = () => {
    navigate({ name: NavigationStrings.AUTH_STACK as keyof RootStackParamList });
  };
  const handleHome = () => {
    navigate({ name: NavigationStrings.BOTTOM_STACK as keyof RootStackParamList });
  };


  // 🟢 Handle selecting Administrator
  const handleSelectAdministrator = () => {
    setRole(RoleType.ADMINISTRATOR); // Save role in Redux
    navigate({ name: NavigationStrings.AUTH_STACK as keyof RootStackParamList });
    console.log('admin')
  };

  // 🟣 Handle selecting Baker
  const handleSelectBaker = () => {
    setRole(RoleType.BAKER); // Save role in Redux
    navigate({ name: NavigationStrings.AUTH_STACK as keyof RootStackParamList });
    console.log('baker')
  };

  return (
    <Container
      scroll={true}
      style={styles.container}
      needsKeyboardAvoiding={true}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Container style={styles.subContainer}>
          <View style={styles.logoContainer}>
            <Animated.Image
              source={images.logo}
              style={[
                styles.logo,
                {
                  opacity,
                  transform: [{ scale }],
                },
              ]}
            />
          </View>
          <View>
            <Text style={styles.title}>Which best describes you? </Text>
            <TouchableOpacity onPress={handleSelectAdministrator}>
              <Text style={styles.button}>Kitchen Operator or Administrator</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSelectBaker}
            >
              <Text style={styles.button}>
                Food Maker, Caterer, Baker, Food Truck Operator
              </Text>
            </TouchableOpacity>

          </View>
          <AuthFooter
            message="Already have an account?"
            linkText="Sign in"
            targetScreen={NavigationStrings.AUTH_STACK}
          />
        </Container>
      </KeyboardAvoidingView>

      {loading && <Loader />}
    </Container>
  );
};

export default SelectRole;
