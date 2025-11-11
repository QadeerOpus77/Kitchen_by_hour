import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS, commonStyles } from '../../constant';
import { panHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';

const styles = StyleSheet.create({
  listContainer: {},
  cardContainer: {
    marginVertical: SIZES.margin,

    // width: SIZES.width * 0.9,
  },
  image: {
    borderRadius: SIZES.radius * 1.5,
  },
  title: {
    ...FONTS.Medium14,
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    ...commonStyles.alignItemsCenter,
  },
  price: {
    ...FONTS.Medium14,
    color: COLORS.ThemeColor,
  },
  permonth: {
    ...FONTS.Medium10,
    color: COLORS.ThemeColor,
  },
  imageBackground: {
    width: '100%',
    height: SIZES.height * 0.2,
    justifyContent: 'flex-end',
    borderRadius: SIZES.radius * 1.5,
    resizeMode: 'cover',
  },
  textContainerWithPrice: {
    flexDirection: 'row',
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentBetween,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius * 2,
    paddingVertical: SIZES.padding * 0.3,
    paddingHorizontal: SIZES.padding,
    margin: SIZES.margin * 0.3,
  },
  textContainer: {
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentBetween,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius * 2,
    paddingVertical: SIZES.padding * 0.3,
    paddingHorizontal: SIZES.padding,
    margin: SIZES.margin * 0.3,
  },
});

export default styles;
