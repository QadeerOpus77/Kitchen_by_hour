import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    marginTop: SIZES.h10,
    // backgroundColor:COLORS.gray,
    marginRight: SIZES.margin * 0.5,
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.margin,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding * 0.5,
    paddingVertical: SIZES.padding * 0.2,
    marginRight: SIZES.h10,
  },
  text: {
    ...FONTS.Medium12,
  },
  activeCard: {
    backgroundColor: COLORS.ThemeColor,
  },
  activeText: {
    color: COLORS.white,
  },
});
