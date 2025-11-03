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
    ...FONTS.Bold24,
    fontWeight: '600',
  },
  subtitle: {
    ...FONTS.Regular14,
    color: COLORS.darkGray,
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
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentCenter,
    backgroundColor: COLORS.ThemeColor,
    width: SIZES.width * 0.9,
    paddingVertical: SIZES.padding * 0.5,
    borderRadius: SIZES.radius,
    marginTop: 'auto',
    // marginBottom: SIZES.margin,
    alignSelf: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: COLORS.inActiveColor,
  },
});
