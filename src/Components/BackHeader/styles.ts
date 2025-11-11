import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.padding / 2,
    position: 'relative',
    zIndex: 12,
    marginBottom: SIZES.margin,
  },

  backButton: {
    position: 'absolute',
    left: SIZES.padding,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: SIZES.padding * 0.7,
    borderRadius: SIZES.radius,
  },

  arrowIcon: {
    resizeMode: 'contain',
    width: SIZES.large,
    height: SIZES.large,
  },

  headerText: {
    ...FONTS.Regular16,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '600',
  },
});
