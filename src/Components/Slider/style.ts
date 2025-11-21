import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.h10,
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
        color:COLORS.black

  },
  activeCard: {
    backgroundColor: COLORS.ThemeColor,
  },
  activeText: {
    color: COLORS.white,
  },
});
