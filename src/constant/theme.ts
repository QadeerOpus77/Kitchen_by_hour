import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

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
  modalColor: '#ffffff',
  suitColor: '#CDCDCD',
  borderDashedColor: '#3B3B3B',
  lightgray: '#F5F5F5',
  datePickerColor: '#252525',
  error: '#df4759',
  lightTheme: '#57aae61e',
};

export const SIZES = {
  // global sizes
  small: RFValue(5),
  base: RFValue(8),
  medium: RFValue(10),
  large: RFValue(18),
  radius: RFValue(10),
  padding: RFValue(20),
  margin: RFValue(20),
  padding2: RFValue(12),
  input: RFValue(40),

  // font sizes
  h8: 8,
  h9: 9,
  h9_5: 9.5,
  h10: 10,
  h11: 11,
  h12: 12,
  h13: 13,
  h14: 14,
  h15: 15,
  h16: 16,
  h17: 17,
  h18: 18,
  h19: 19,
  h20: 20,
  h21: 21,
  h22: 22,
  h23: 23,
  h24: 24,
  h25: 25,
  h26: 26,
  h27: 27,
  h28: 28,
  h30: 30,
  h32: 32,
  h33: 33,
  h38: 38,
  h40: 40,
  h45: 45,
  h48: 48,
  h50: 50,
  h52: 52,
  h55: 55,
  h60: 60,
  h65: 65,
  h70: 70,
  h80: 80,
  h150: 150,
  // app dimensions
  width,
  height,
};

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
  Bold17: {
    fontFamily: 'Roboto-Bold',
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
