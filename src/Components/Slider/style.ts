import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';


export default StyleSheet.create({
  container: {
    // marginTop:SIZES.h10,
    // backgroundColor:COLORS.gray,
    marginLeft: SIZES.h16,
    marginBottom:SIZES.h10
  },
  card: {
    backgroundColor:COLORS.white,
    borderRadius: SIZES.h10,
    paddingHorizontal:SIZES.padding*.5,
    paddingVertical:SIZES.padding*.3,
    marginRight: SIZES.h10,
    },
  text: {
    ...FONTS.Medium14,
  },
  activeCard: {
    backgroundColor:COLORS.ThemeColor,
  },
  activeText: {
    color:COLORS.white,
  },
});