import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import { FormInputProps } from '../types';
import styles from './style';
import { COLORS, images, SIZES } from '../../constant';

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
  width,
  height,
  onBlur,
  backgroundColor,
  phoneNumber,
  isDarkMode = false,
  settingEmail = false,
  error,
  borderColor,
  trip,
  editable,
  rightIcon,
  onRightIconPress,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Native Animated values
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: isFocused ? 1 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isFocused]);

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isPasswordVisible ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [isPasswordVisible]);

  // Interpolate rotation
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scaleAnim }] }]}
    >
      <View
        style={[
          styles.inputWrapper,
          {
            width,
            height,
            backgroundColor: trip ? COLORS.black : COLORS.white,
            borderRadius: trip ? SIZES.h22 : SIZES.h45,
          },
        ]}
      >
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          style={[styles.textInput]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholderTextColor={trip ? COLORS.darkGray : COLORS.black}
          keyboardType={phoneNumber ? 'number-pad' : undefined}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => setIsFocused(false)}
          editable={editable}
          selectionColor={COLORS.ThemeColor}
        />

        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.rightIconContainer}
          >
            <Image source={rightIcon} style={styles.rightIcon} />
          </TouchableOpacity>
        )}

        {isPassword && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!isPasswordVisible)}
            style={styles.passwordContainer}
          >
            <Animated.Image
              source={
                isPasswordVisible ? images.passwordShow : images.passwordhide
              }
              style={[
                styles.passwordIcon,
                { transform: [{ rotate: rotateInterpolate }] },
              ]}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </Animated.View>
  );
};

export default FormInput;
