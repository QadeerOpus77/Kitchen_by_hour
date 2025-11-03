import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import styles from './styles';
import { images } from '../../constant';
import { LogoContainerProps } from '../types';

const LogoContainer: React.FC<LogoContainerProps> = (back) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
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

  return (
    <View style={styles.subContainer}>
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
  );
};

export default LogoContainer;
