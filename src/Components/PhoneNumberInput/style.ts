import { StyleSheet } from 'react-native';
import { FONTS, COLORS, SIZES } from '../../constant';

export default StyleSheet.create({
  wrapper: {
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    marginTop: SIZES.h20,
  },

  label: {
    ...FONTS.Regular14,
    color: COLORS.black,
    marginBottom: SIZES.h8,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: SIZES.h10,
    paddingHorizontal: SIZES.h12,
    height: SIZES.padding * 2,
    backgroundColor: COLORS.white,
  },

  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.h8,
  },

  flag: {
    ...FONTS.Medium22,
    marginRight: SIZES.h10,
  },

  code: {
    ...FONTS.Medium14,
    color: COLORS.black,
    marginRight: SIZES.h10,
  },

  arrowImage: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: COLORS.darkGray,
  },

  verticalLine: {
    width: 1,
    height: '60%',
    backgroundColor: COLORS.borderColor,
    marginHorizontal: SIZES.h8,
  },

  textInput: {
    flex: 1,
    ...FONTS.Regular16,
    color: COLORS.black,
    paddingVertical: 0,
  },
  errorText: {
    color: COLORS.white,
  },
});
