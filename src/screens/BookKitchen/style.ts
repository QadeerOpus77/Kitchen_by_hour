import { StyleSheet, Dimensions } from 'react-native';
import { SIZES, COLORS, FONTS, commonStyles } from '../../constant';
import SignIn from '../SignIn';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: SIZES.padding,
  },
  location: {
    backgroundColor: COLORS.lightgray,
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.padding / 2,
    marginHorizontal: SIZES.margin,
  },
  locationTxt: {
    ...FONTS.Regular10,
    textAlign: 'center',
  },
  title: {
    ...FONTS.Medium16,
    marginVertical: SIZES.margin,
  },
  formBox: {
    ...commonStyles.alignItemsCenter,
    backgroundColor: COLORS.lightgray,
    paddingHorizontal: SIZES.padding * 0.5,
    paddingVertical: SIZES.padding,
    borderRadius: SIZES.radius,
    gap: SIZES.margin,
  },
  formText: {
    ...FONTS.Medium12,
    textAlign: 'center',
    color: COLORS.darkGray,
  },
  formBtn: {
    backgroundColor: COLORS.ThemeColor,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.input,
    width: '100%',
    alignSelf: 'center',
  },
  chatIcon: {
    width: SIZES.large * 3,
    height: SIZES.large * 3,
    resizeMode: 'contain',
    position: 'absolute',
    right: SIZES.h25,
    bottom: SIZES.h10 * 10,
    zIndex: 2,
  },
});
