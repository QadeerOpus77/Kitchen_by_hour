import { DevSettings, StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  subContainer: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent:'space-around'
  },
  logoContainer: {
    // marginTop: SIZES.h30,
    alignItems: 'center',
  },
  logo: {
    width: SIZES.width * 0.45,
    height: SIZES.width * 0.45,
    resizeMode: 'contain',
    // marginBottom: SIZES.h50,
  },
  title: {
    // marginTop:SIZES.h50,
    marginBottom:SIZES.h20,
    color: COLORS.black,
    ...FONTS.Regular22,
    textAlign: 'center',
    fontSize: SIZES.h24,
  },
  button:{
    backgroundColor:COLORS.ThemeColor,
    margin:SIZES.h10,
    paddingVertical:SIZES.padding,
    paddingHorizontal:SIZES.padding*3,
    textAlign:'center',
    borderRadius:SIZES.h10,
    ...FONTS.Regular16,
    color:COLORS.white  
  },
   signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // marginTop: SIZES.padding*5,
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
