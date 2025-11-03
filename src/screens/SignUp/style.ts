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
        ...FONTS.Regular22,
        textAlign: 'center',
        fontSize: SIZES.h30,
    },
    subContainer: {
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    inputContainer: {
        marginBottom: SIZES.width * 0.01, 
    },
    textContainer: {
    },
    welcomeText: {
        fontSize: SIZES.h40,
        color: COLORS.darkGray,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: SIZES.width * 0.02,
        marginHorizontal: SIZES.width * 0.03,
        width: SIZES.width * 0.94,
        marginBottom: SIZES.h15
    },
    // checkbox: {
    //     width: SIZES.width * 0.06,
    //     height: SIZES.width * 0.05,
    //     marginRight: SIZES.width * 0.02,
    // },
    // termsText: {
    //     ...FONTS.Regular12,
    //     color: COLORS.black,
    //     width: SIZES.width * 0.8,
    // },
    linkText: {
        // color: COLORS.socialGoggle
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
        marginTop:SIZES.h10
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SIZES.padding,
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
    errorText: {
        color: COLORS.red,
        ...FONTS.Regular9_5,
        marginLeft: SIZES.h25,
        bottom: SIZES.h10,
    },
});
