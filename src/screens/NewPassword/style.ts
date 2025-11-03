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
  },
  title: {
    marginTop: SIZES.h15,
    color: COLORS.black,
    ...FONTS.Regular22,
    fontSize: SIZES.h30,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  instructionText: {
    paddingHorizontal: SIZES.padding,
    ...FONTS.Regular14,
    color: COLORS.black,
    marginBottom: SIZES.h20,
    top: SIZES.h20,
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
    borderRadius: SIZES.h10,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height * 0.06,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: SIZES.h10,
    marginTop: 'auto',
    marginBottom: SIZES.h50,
  },
  //     padding: SIZES.h10,
  //     // position: 'absolute',
  //     // bottom: SIZES.height * 0.1,
  //     left: 0,
  //     right: 0,
  // },
});
