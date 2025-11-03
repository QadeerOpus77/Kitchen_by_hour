import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
  },
  title: {
    paddingHorizontal: SIZES.padding,
    ...FONTS.Regular20,
  },
  instructionText: {
    paddingHorizontal: SIZES.padding,
    ...FONTS.Regular12,
    color: COLORS.darkGray,
    marginBottom: SIZES.h20,
  },
  passwordInputContainer: {
    marginTop: SIZES.width * 0.08,
  },
  requirementList: {
    marginTop: SIZES.base,
  },
  bulletPoint: {
    ...FONTS.Regular11,
    color: COLORS.darkGray,
    marginBottom: SIZES.base / 2,
    textAlign: 'center',
  },
  requirement: {
    ...FONTS.Regular11,
    color: COLORS.darkGray,
  },
  requirementMet: {
    ...FONTS.Regular11,
  },
  requirementText: {
    flexDirection: 'row',
    marginBottom: SIZES.base,
  },
  buttonContainer: {
    backgroundColor: COLORS.ThemeColor,
    borderRadius: SIZES.radius,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: SIZES.margin,
  },
});
