 
import { StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constant';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightgray,
    paddingBottom: SIZES.padding * 1.5,
  },
  title: {
    ...FONTS.Medium15,
    // paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    color:COLORS.black
  },
  title2: {
    ...FONTS.Medium15,
    color:COLORS.black,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
  detailContainer: {
    flex: 1,
    paddingBottom: SIZES.padding * 2.5,
    paddingHorizontal: SIZES.padding,
  },
  chatIcon: {
    width: SIZES.large * 3,
    height: SIZES.large * 3,
    resizeMode: 'contain',
    position: 'absolute',
    right: SIZES.h10,
    bottom: SIZES.h10 * 10,
    zIndex: 2,
  },
});
