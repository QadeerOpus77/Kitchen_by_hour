import { RFValue } from 'react-native-responsive-fontsize';

export const COLORS = {
  primary: '#D5AD60',
  secondary: '#274C66',
  white: '#FFFFFF',
  text_color: '#274C66',
  secondary_text_color: '#565656',
  transparent: 'transparent',
  inActiveColor: '#C0C0C0',
  card_background: '#EDEDEE',
  black: '#000',
  red: 'red',
  ThemeColor: '#3994FF',
  lightBlue: '#3994FF',
  darkBlue: '#173046',
  buttonColor: 'rgba(0, 218, 255, 1)',
  socialButtonColor: 'rgba(21, 28, 22, 1)',
  facebookButtonColor: 'rgba(60, 90, 141, 1)',
  containerColor: 'rgba(6, 52, 83, 0)',
  PieChartSideColor: '#7086FD',
  PieChartMiddColor: '#6FD195',
  PieChartSideTwoColor: '#FFAE4C',
  borderColor: '#f5f5f5',
  gradientColor: '#01131E',
  brown: '#8B4513',
  green: '#008000',
  gray: '#808080',
  redText: '#FF0000',
  greenEye: '#2ADF26',
  grayEye: '#6B6F71',
  brownEyes: '#753F0E',
  yellowEyes: '#E8BB1C',
  blue: '#07DBFA',
  darkGray: '#757575',
  modalColor: '#fff',
  suitColor: '#CDCDCD',
  borderDashedColor: '#3B3B3B',
  lightgray: '#F5F5F5',
  datePickerColor: '#252525',
  error: '#df4759',
  lightTheme: '#57aae61e',
};
import { Dimensions } from 'react-native';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Base dimensions (iPhone 11 Pro)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Scaling helpers
const scale = (size: number) => (SCREEN_WIDTH / BASE_WIDTH) * size;
const verticalScale = (size: number) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const SIZES = {
  // global sizes
  small: moderateScale(5),
  base: moderateScale(8),
  medium: moderateScale(10),
  large: moderateScale(18),
  radius: moderateScale(10),
  padding: moderateScale(20),
  margin: moderateScale(20),
  padding2: moderateScale(12),
  input: verticalScale(40),

  // font sizes (kept proportional)
  h5: moderateScale(5),
  h8: moderateScale(8),
  h9: moderateScale(9),
  h9_5: moderateScale(9.5),
  h10: moderateScale(10),
  h11: moderateScale(11),
  h12: moderateScale(12),
  h13: moderateScale(13),
  h14: moderateScale(14),
  h15: moderateScale(15),
  h16: moderateScale(16),
  h17: moderateScale(17),
  h18: moderateScale(18),
  h19: moderateScale(19),
  h20: moderateScale(20),
  h21: moderateScale(21),
  h22: moderateScale(22),
  h23: moderateScale(23),
  h24: moderateScale(24),
  h25: moderateScale(25),
  h26: moderateScale(26),
  h27: moderateScale(27),
  h28: moderateScale(28),
  h30: moderateScale(30),
  h32: moderateScale(32),
  h33: moderateScale(33),
  h38: moderateScale(38),
  h40: moderateScale(40),
  h45: moderateScale(45),
  h48: moderateScale(48),
  h50: moderateScale(50),
  h52: moderateScale(52),
  h55: moderateScale(55),
  h60: moderateScale(60),
  h65: moderateScale(65),
  h70: moderateScale(70),
  h80: moderateScale(80),
  h150: moderateScale(150),

  // app dimensions
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
};

export { scale, verticalScale, moderateScale };

export const FONTS = {
  Bold150: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h150),
  },
  Bold48: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h48),
  },
  Bold40: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h40),
  },
  Bold35: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h38),
  },
  Bold33: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h33),
  },
  Bold30: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h30),
  },
  Bold28: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h28),
  },
  Bold26: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h26),
  },
  Bold24: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h24),
  },
  Bold23: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h23),
  },
  Bold20: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h20),
  },
  Bold18: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h18),
  },
  Bold17: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h17),
  },
  Bold16: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h16),
  },
  Bold15: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h15),
  },
  Bold14: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h14),
  },
  Bold13: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h13),
  },
  Bold12: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h12),
  },
  Bold11: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h11),
  },
  Bold9: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h9),
  },
  Medium32: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h32),
  },
  Medium22: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h22),
  },

  Medium20: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h20),
  },
  Medium18: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h18),
  },
  Medium16: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h16),
  },
  Medium15: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h15),
  },
  Medium14: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h14),
  },
  Medium13: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h13),
  },
  Medium12: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h12),
  },
  Medium11: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h11),
  },
  Medium10: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h10),
  },
  Medium9_5: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h9_5),
  },
  Medium9: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h9),
  },
  Medium8: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h8),
  },
  Regular22: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h22),
  },
  Regular20: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h20),
  },
  Regular18: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h18),
  },
  Regular17: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h17),
  },
  Regular16: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h16),
  },
  Regular15: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h15),
  },
  Regular14: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h14),
  },
  Regular13: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h13),
  },
  Regular12: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h12),
  },
  Regular11: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h11),
  },
  Regular10: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h10),
  },
  Regular9_5: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h9_5),
  },
  Regular8: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h8),
  },
  Regular5: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h5),
  },
  light40: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h40),
  },
  light13: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h13),
  },
  light12: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h12),
  },
  light11: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h11),
  },
  light10: {
    fontFamily: 'Poppins-Light',
    fontSize: RFValue(SIZES.h10),
  },
};

const appTheme = { FONTS, SIZES, COLORS };

export default appTheme;
