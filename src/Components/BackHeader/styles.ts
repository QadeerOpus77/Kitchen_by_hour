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
    ...FONTS.Medium16,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '600',
  },
});
