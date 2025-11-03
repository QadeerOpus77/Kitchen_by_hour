import { DevSettings, StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  subContainer: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  text: {
    ...FONTS.Medium20,
    textAlign: 'center',
  },
  socialContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.margin * 0.5,
    gap: SIZES.h10,
  },
  socialIcon: {
    width: SIZES.large,
    height: SIZES.large,
    resizeMode: 'contain',
  },
  socialText: {
    color: COLORS.darkGray,
    ...FONTS.Regular14,
  },
  socialContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SIZES.h10,
  },
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    height: SIZES.input,
    paddingHorizontal: SIZES.h16,
    width: SIZES.width * 0.9,
  },

  inputContainer: {},
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SIZES.width * 0.05,
    marginBottom: SIZES.margin,
  },
  rememberMeCheckBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.h10,
  },
  rememberMeText: {
    marginLeft: SIZES.margin * 0.3,
    color: COLORS.darkGray,
  },
  forgotPasswordText: {
    ...FONTS.Regular10,
    marginTop: SIZES.h10,
    color: COLORS.ThemeColor,
  },

  continueWith: {
    ...FONTS.Regular14,
    textAlign: 'center',
  },
});
