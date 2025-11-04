import { CodegenTypes, StyleSheet } from 'react-native';
import { SIZES, COLORS, FONTS, commonStyles } from '../../constant';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    // paddingVertical: SIZES.padding,
  },
  listContainer: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.9,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.margin * 0.5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: SIZES.height * 0.25,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
  },
  content: {
    paddingTop: SIZES.padding * 0.5,
  },
  title: {
    ...FONTS.Medium16,
  },
  address: {
    ...FONTS.Medium10,
    marginBottom: SIZES.h10,
  },
  description: {
    ...FONTS.Regular10,
    marginBottom: SIZES.base,
    color: COLORS.darkGray,
    // lineHeight: 18,
  },
  button: {
    backgroundColor: COLORS.ThemeColor,
    height: SIZES.input,
    borderRadius: SIZES.radius,
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentCenter,
    width: '100%',
  },
});

export default styles;
