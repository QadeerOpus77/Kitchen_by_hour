import { StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constant';
import { Container } from '../../Components';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightgray,
    paddingBottom: SIZES.padding,
  },
  title: {
    ...FONTS.Medium14,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  detailContainer: {
    flex: 1,
    paddingBottom: SIZES.height * 0.16,
    paddingHorizontal: SIZES.padding,
  },
});
