import { DevSettings, StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    subContainer: {
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },
    text: {
        color: COLORS.black,
        ...FONTS.Regular22,
        textAlign: 'center',
        fontSize: SIZES.h30,
    },
    socialContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.h10,
        gap: SIZES.h20,
    },
    socialIcon: {
        width: SIZES.h20,
        height: SIZES.h20,
        resizeMode: 'contain',
    },
     socialText: {
    color: COLORS.darkGray,
    ...FONTS.Regular16,
  },
  socialContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SIZES.h10,
  },
 socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.h10,
    paddingVertical: SIZES.h12,
    paddingHorizontal: SIZES.h16,
    width: SIZES.width * 0.9,
  },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SIZES.h10,
    },
    buttonText: {
        color: COLORS.white,
        ...FONTS.Regular15,
        textAlign: 'center',
    },
    emailText: {
        color: COLORS.darkGray,
        ...FONTS.Regular12,
        textAlign: 'center',
        marginTop: SIZES.h20,
        marginBottom: SIZES.h10,
    },
    inputContainer: {
        
    },
    rememberMeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: SIZES.width * 0.05,
        marginBottom: SIZES.h30,
    },
    rememberMeCheckBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.h10

    },
    rememberMeText: {
        marginLeft: SIZES.width * 0.02,
        color: COLORS.darkGray
    },
    forgotPasswordText: {
        ...FONTS.Regular12,
        marginTop: SIZES.h10,
        color: COLORS.ThemeColor,
    },
    checkbox: {
        marginLeft:SIZES.h10,
        borderColor:COLORS.darkGray,
        width: SIZES.h20,
        height: SIZES.h20,
        
    },
    continueWith:{
        ...FONTS.Regular20,
        textAlign:'center',
        // margin:SIZES.h15
    },
     signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SIZES.padding*2,
    },
    signupLink: {
        marginLeft:SIZES.h10*.5,
        ...FONTS.Medium14,
        color: COLORS.ThemeColor,
    },
    member: {
        ...FONTS.Regular14,
        color: COLORS.darkGray,
    },
   
});
