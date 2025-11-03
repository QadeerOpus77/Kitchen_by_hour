import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constant';

export const styles = StyleSheet.create({
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
  subtitle: {
     ...FONTS.Regular14,
    color: COLORS.black,
    marginBottom: SIZES.base,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.h20,
  },
  otpInput: {
    ...FONTS.Regular22,
    width:SIZES.h50,
    height:SIZES.h50,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: SIZES.h10,
    textAlign: 'center',
    color: COLORS.black,
    backgroundColor: COLORS.white,
    
  },
  otpInputFilled: {
    borderColor: COLORS.ThemeColor,
    backgroundColor: COLORS.white,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    borderRadius:SIZES.h10,
    backgroundColor:COLORS.lightTheme,
    paddingVertical:SIZES.width*0.03,
    width:SIZES.width*0.4
    
  },
  resendText: {
    ...FONTS.Regular14,
    color: COLORS.black,
  },
  timerText: {
    ...FONTS.Regular14,
    color: COLORS.ThemeColor,
  },
  continueButton: {
    backgroundColor:COLORS.ThemeColor,
    padding:SIZES.width*0.03,
    borderRadius: SIZES.h10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "auto",
    marginBottom: SIZES.h50,
  },
  continueButtonDisabled: {
    backgroundColor: '#B0D4FF',
  },
  continueButtonText: {
    color: COLORS.white,
        ...FONTS.Regular15,
        textAlign: 'center'
  },
});