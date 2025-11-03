import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import { styles } from './style';
import NavigationStrings from '../../navigation/NavigationStrings';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import { BackHeader, Button } from '../../Components';
import { COLORS, SIZES } from '../../constant';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const OTP = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const [active, setActive] = useState(true);
  const inputRefs = useRef<TextInput[]>([]);

  // Timer countdown
  useEffect(() => {
    if (!active || timer === 0) return;
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [active, timer]);

  // Handle OTP input change
  const handleOtpChange = (value: string, index: number) => {
    // Only digits allowed
    if (!/^\d*$/.test(value)) return;

    setOtp(prevOtp => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      // Move to next input if a digit was entered
      if (value && index < newOtp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      return newOtp;
    });
  };

  // Handle backspace navigation
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle resend
  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    setTimer(59);
    setActive(true);
    inputRefs.current[0]?.focus();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid
      showsVerticalScrollIndicator={false}
    >
      <BackHeader />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: SIZES.padding }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.subtitle}>
            Please enter the 6-digit code we sent to your email address.
          </Text>

          {/* OTP Inputs */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={`otp-${index}`}
                ref={(ref) => {
                  if (ref) inputRefs.current[index] = ref;
                }}
                style={[styles.otpInput, digit ? styles.otpInputFilled : null]}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
                blurOnSubmit={false}
                textContentType="oneTimeCode"
                autoComplete="sms-otp"
                importantForAutofill="yes"
                placeholder=""
                placeholderTextColor={COLORS.gray}
              />
            ))}
          </View>

          {/* Resend Timer */}
          <TouchableOpacity
            style={[
              styles.resendContainer,
              {
                backgroundColor:
                  timer === 0 ? COLORS.ThemeColor : COLORS.lightTheme,
                opacity: timer === 0 ? 1 : 0.7,
              },
            ]}
            onPress={handleResend}
            disabled={timer !== 0}
          >
            <Text style={styles.resendText}>
              {timer === 0 ? 'Resend Code' : 'Resend in '}
            </Text>
            {timer !== 0 && (
              <Text style={styles.timerText}>{formatTime(timer)}</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <Button
          title="Continue"
          onPress={() =>
            navigate({
              name: NavigationStrings.NEW_PASSWORD as keyof RootStackParamList,
            })
          }
          disabled={!isOtpComplete}
          style={[
            styles.continueButton,
            !isOtpComplete && styles.continueButtonDisabled,
          ]}
        />
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default OTP;
