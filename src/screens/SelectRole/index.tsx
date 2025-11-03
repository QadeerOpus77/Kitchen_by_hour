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
import { Container, LogoContainer, Loader, Button } from '../../Components';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import styles from './style';
import { useAuthState } from '../../redux/Hook/authHooks'; // 

const SelectRole: React.FC = () => {
  const { loading, error, isAuthenticated } = useAuthState(); // ✅ fetch state values

  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.5)).current;

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
    navigate({ name: NavigationStrings.HOME_STACK as keyof RootStackParamList });
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
          <TouchableOpacity>
            <Text style={styles.button}>Kitchen Operator or Administrator</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={handleHome}>
            <Text style={styles.button}>
              Food Maker, Caterer, Baker, Food Truck Operatora
            </Text>
          </TouchableOpacity>

          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.member}>Already have an account?</Text>
            <Text style={styles.signupLink} onPress={handleLogin}>
              Sign in
            </Text>
          </View>
        </Container>
      </KeyboardAvoidingView>

      {loading && <Loader />}
    </Container>
  );
};

export default SelectRole;
