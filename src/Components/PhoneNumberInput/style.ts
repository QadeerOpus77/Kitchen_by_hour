import { StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES } from '../../constant';

export default StyleSheet.create({
  wrapper: {
    // alignSelf: 'center',
    marginTop: SIZES.h20,
    width: SIZES.width,
    paddingHorizontal: SIZES.padding * 0.95,
  },

  label: {
    ...FONTS.Regular12,
    color: COLORS.black,
    marginBottom: SIZES.h8,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding * 0.5,
    height: SIZES.input,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
  },

  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flag: {
    ...FONTS.Medium22,
    marginRight: SIZES.margin * 0.5,
  },

  code: {
    ...FONTS.Medium14,
    color: COLORS.darkGray,
    marginRight: SIZES.h10,
  },

  arrowImage: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: COLORS.darkGray,
  },

  verticalLine: {
    width: 2,
    height: '70%',
    backgroundColor: COLORS.inActiveColor,
    marginHorizontal: SIZES.h8,
  },

  textInput: {
    flex: 1,
    ...FONTS.Regular16,
    color: COLORS.darkGray,
  },
  errorText: {
    color: COLORS.white,
  },
});
