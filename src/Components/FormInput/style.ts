import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS, commonStyles } from '../../constant';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.margin * 0.5,
  },
  inputWrapper: {
    flexDirection: 'column',
    paddingHorizontal: SIZES.padding,
    width: SIZES.width,
  },
  textInput: {
    flex: 1,
    ...FONTS.Regular14,
    backgroundColor: COLORS.white,
    color: COLORS.darkGray,
    paddingHorizontal: SIZES.padding * 0.5,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    height: SIZES.input,
  },
  label: {
    color: COLORS.black,
    ...FONTS.Regular10,
  },
  passwordIcon: {
    width: SIZES.large,
    height: SIZES.large,
    resizeMode: 'contain',
    tintColor: COLORS.ThemeColor,
    marginRight: SIZES.margin * 0.5,
  },
  passwordContainer: {
    position: 'absolute',
    right: SIZES.h30,
    bottom: SIZES.h15,
  },
  errorText: {
    color: COLORS.red,
    ...FONTS.Regular8,
    marginLeft: SIZES.margin * 1.5,
  },
  rightIconContainer: {
    position: 'absolute',
    right: SIZES.h30,
    bottom: SIZES.h15,
    marginRight: SIZES.margin * 0.5,
  },
  rightIcon: {
    width: SIZES.large,
    height: SIZES.large,
    resizeMode: 'contain',
  },
});

export default styles;
