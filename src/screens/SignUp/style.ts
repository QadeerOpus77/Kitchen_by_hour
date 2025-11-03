import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  text: {
    color: COLORS.black,
    ...FONTS.Medium20,
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginBottom: SIZES.margin,
  },

  buttonContainer: {
    backgroundColor: COLORS.ThemeColor,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.input,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
  },
  errorText: {
    color: COLORS.red,
    ...FONTS.Regular9_5,
    marginLeft: SIZES.margin,
  },
});
