import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.h10,
  },
  inputWrapper: {
    flexDirection: 'column',
    paddingHorizontal: SIZES.padding * 0.5,
  },
  textInput: {
    flex: 1,
    color: COLORS.darkGray,
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    paddingHorizontal: SIZES.padding * 0.5,
    borderRadius: SIZES.radius,
    ...FONTS.Regular14,
    height: SIZES.input,
  },
  label: {
    color: COLORS.black,
    ...FONTS.Regular12,
  },
  passwordIcon: {
    width: SIZES.medium * 1.5,
    height: SIZES.medium * 1.5,
    resizeMode: 'contain',
    tintColor: COLORS.ThemeColor,
  },
  passwordContainer: {
    position: 'absolute',
    right: SIZES.h30,
    bottom: SIZES.h15,
  },
  errorText: {
    color: COLORS.red,
    ...FONTS.Regular9_5,
    marginLeft: SIZES.margin,
  },
  rightIconContainer: {
    position: 'absolute',
    right: SIZES.h10,
    padding: SIZES.h10,
  },
  rightIcon: {
    width: SIZES.medium * 1.5,
    height: SIZES.medium * 1.5,
    resizeMode: 'contain',
  },
});

export default styles;
