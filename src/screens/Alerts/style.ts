import { StyleSheet } from 'react-native';
import { COLORS, commonStyles, FONTS, SIZES } from '../../constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightgray,
  },
  header: {
    paddingVertical: SIZES.padding,
  },
  tabRow: {
    alignSelf: 'center',
    ...commonStyles.justifyContentBetween,
    ...commonStyles.alignItemsCenter,
    flexDirection: 'row',
    backgroundColor: COLORS.white,

    borderRadius: SIZES.radius,
    width: SIZES.width * 0.9,
  },
  tabButton: {
    alignSelf: 'center',
    width: SIZES.width * 0.3,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.padding * 0.5,
  },
  tabButtonActive: {
    backgroundColor: COLORS.ThemeColor,
  },
  tabText: {
    ...FONTS.Regular10,
    textAlign: 'center',
  },
  tabTextActive: {
    color: COLORS.white,
  },
  sectionTitle: {
    ...FONTS.Regular8,
    alignSelf: 'center',
    color: COLORS.ThemeColor,
    marginVertical: SIZES.margin,
  },
  notificationCard: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.radius,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
    marginVertical: SIZES.margin * 0.5,
    width: SIZES.width * 0.9,
    gap: SIZES.margin,
  },
  unreadCard: {
    borderBottomColor: COLORS.borderColor,
    backgroundColor: COLORS.white,
  },
  iconContainer: {
    ...commonStyles.justifyContentCenter,
    ...commonStyles.alignItemsCenter,
    backgroundColor: COLORS.white,
    height: SIZES.large * 2.5,
    width: SIZES.large * 2.5,
    borderRadius: SIZES.radius * 20,
    padding: SIZES.padding,
  },
  icon: {
    width: SIZES.large * 1.5,
    height: SIZES.large * 1.5,
    resizeMode: 'contain',
    tintColor: COLORS.ThemeColor,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    ...FONTS.Regular10,
    color: COLORS.black,
  },
  notificationMessage: {
    ...FONTS.Regular8,
    color: COLORS.gray,
  },
  timeText: {
    ...FONTS.Regular8,
    color: COLORS.gray,
  },
});

export default styles;
