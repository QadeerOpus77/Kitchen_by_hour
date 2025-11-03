import { StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constant';
import { Container } from '../../Components';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightgray,
    // paddingBottom: SIZES.height * 0.3,
  },
  title: {
    ...FONTS.Medium16,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
  },
  detailContainer: {
    flex: 1,
    paddingBottom: SIZES.height * 0.25,
    paddingHorizontal: SIZES.padding,
  },
});
