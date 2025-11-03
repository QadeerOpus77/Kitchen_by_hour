import { DevSettings, StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  subContainer: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: SIZES.width * 0.45,
    height: SIZES.height * 0.25,
    resizeMode: 'contain',
    marginBottom: SIZES.height * 0.1,
    marginTop: SIZES.margin,
  },
  title: {
    marginBottom: SIZES.margin,
    color: COLORS.black,
    ...FONTS.Regular22,
    textAlign: 'center',
    fontSize: SIZES.h24,
  },
  button: {
    backgroundColor: COLORS.ThemeColor,
    margin: SIZES.h10,
    paddingVertical: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding * 2,
    textAlign: 'center',
    borderRadius: SIZES.radius,
    ...FONTS.Regular14,
    color: COLORS.white,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: SIZES.padding*5,
  },
  signupLink: {
    marginLeft: SIZES.h10 * 0.5,
    ...FONTS.Medium14,
    color: COLORS.ThemeColor,
  },
  member: {
    ...FONTS.Regular14,
    color: COLORS.darkGray,
  },
});
