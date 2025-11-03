import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
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
    ...FONTS.Regular20,
  },
  description: {
    ...FONTS.Regular12,
    color: COLORS.darkGray,
    marginBottom: SIZES.base,
  },
  inputContainer: {
    marginHorizontal: SIZES.padding,
    alignItems: 'center',
    flexDirection: 'column',
  },
  textInput: {
    paddingLeft: SIZES.h10,
    // flex: 1,
    alignSelf: 'center',
    color: COLORS.black,
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: SIZES.h10,
    ...FONTS.Regular16,
  },
  buttonContainer: {
    backgroundColor: COLORS.ThemeColor,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.input,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    marginBottom: SIZES.margin,
  },
  forgotButtonText: {
    color: COLORS.white,
    ...FONTS.Regular15,
    textAlign: 'center',
  },
});
