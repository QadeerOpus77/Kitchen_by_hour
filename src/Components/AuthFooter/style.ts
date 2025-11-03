import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS, commonStyles } from '../../constant';

const styles = StyleSheet.create({
  signupContainer: {
    ...commonStyles.justifyContentCenter,
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: SIZES.margin,
  },
  signupLink: {
    marginLeft: SIZES.margin * 0.1,
    ...FONTS.Bold12,
    fontWeight: '600',
    color: COLORS.ThemeColor,
  },
  member: {
    ...FONTS.Regular12,
    color: COLORS.darkGray,
  },
});

export default styles;
