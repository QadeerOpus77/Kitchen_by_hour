import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES, commonStyles } from '../../constant';
import { ThemeContext } from '@react-navigation/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  title: {
    ...FONTS.Regular20,
  },
  subtitle: {
    ...FONTS.Regular12,
    color: COLORS.darkGray,
    marginBottom: SIZES.base,
  },
  otpContainer: {
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentCenter,
    padding: SIZES.padding,
    flexDirection: 'row',
    gap: SIZES.base,
  },
  otpInput: {
    ...FONTS.Regular22,
    width: SIZES.input * 1,
    height: SIZES.input * 1.1,
    borderColor: COLORS.borderColor,
    borderRadius: SIZES.h10,
    textAlign: 'center',
    borderWidth: 1,
    color: COLORS.black,
  },
  otpInputFilled: {},
  resendContainer: {
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentCenter,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: SIZES.radius * 0.5,
    paddingVertical: SIZES.padding * 0.5,
    width: SIZES.width * 0.4,
    backgroundColor: COLORS.ThemeColor,
  },
  resendText: {
    ...FONTS.Regular12,
  },
  timerText: {
    ...FONTS.Regular14,
    color: COLORS.ThemeColor,
  },
  continueButton: {
    backgroundColor: COLORS.ThemeColor,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.input,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    marginBottom: SIZES.margin,
  },
  continueButtonDisabled: {
    backgroundColor: COLORS.inActiveColor,
  },
});
