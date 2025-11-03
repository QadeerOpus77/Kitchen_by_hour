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
      padding:SIZES.padding
    },
    title: {
      marginTop:SIZES.h15,
      color: COLORS.black,
      ...FONTS.Regular22,
      fontSize: SIZES.h30,
    },
  description: {
    ...FONTS.Regular14,
    color: COLORS.black,
    marginBottom: SIZES.base,
  },
  inputContainer: {
    marginHorizontal:SIZES.padding,
    alignItems: 'center',
    flexDirection: 'column',
  },
  textInput: {
    paddingLeft: SIZES.h10,
    // flex: 1,
    alignSelf:'center',
    color: COLORS.black,
    textAlignVertical: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: SIZES.h10,
    ...FONTS.Regular16,
  },
  forgotButton: {
    backgroundColor:COLORS.ThemeColor,
    padding:SIZES.width*0.03,
    borderRadius: SIZES.h10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "auto",
    marginBottom: SIZES.h30,
  },
  forgotButtonText:{
    color: COLORS.white,
        ...FONTS.Regular15,
        textAlign: 'center'
  }
});
