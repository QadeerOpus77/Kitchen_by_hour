import { StyleSheet } from 'react-native';
import { COLORS, commonStyles, FONTS, SIZES } from '../../constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightgray,
  },
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.margin,
    marginVertical: SIZES.margin / 2,
    padding: SIZES.padding / 2,
    borderRadius: SIZES.radius,
  },
  imageWrapper: {},
  profileImage: {
    width: SIZES.large * 4,
    height: SIZES.large * 4,
    borderRadius: SIZES.large * 5,
  },
  User: {
    flexDirection: 'column',
  },
  editIcon: {
    width: SIZES.large,
    height: SIZES.large,
    position: 'absolute',
    bottom: 10,
    right: 0,
    backgroundColor: COLORS.ThemeColor,
    borderRadius: SIZES.radius,
    padding: SIZES.padding * 0.5,
    ...commonStyles.justifyContentCenter,
    ...commonStyles.alignItemsCenter,
  },
  cameraicon: {
    tintColor: COLORS.white,
    width: SIZES.medium,
    height: SIZES.medium,
    resizeMode: 'contain',
  },
  name: {
    ...FONTS.Regular16,
    marginHorizontal: SIZES.margin / 2,
  },
  email: {
    marginHorizontal: SIZES.margin / 2,
    ...FONTS.Regular10,
    color: COLORS.ThemeColor,
    marginBottom: SIZES.margin * 0.5,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding / 2,
    borderColor: COLORS.lightgray,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginTop: SIZES.margin * 0.5,
  },
  menuicon: {
    width: SIZES.medium * 2,
    height: SIZES.medium * 2.5,
    resizeMode: 'contain',
    tintColor: COLORS.ThemeColor,
  },
  menuLabel: {
    ...FONTS.Regular10,
    marginTop: SIZES.margin / 4,
  },
  arrow: {
    width: SIZES.medium,
    height: SIZES.large,
    resizeMode: 'contain',
    tintColor: COLORS.ThemeColor,
  },
  logout: {
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentCenter,
    alignSelf: 'center',
    backgroundColor: COLORS.ThemeColor,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
    borderRadius: SIZES.radius,
    marginTop: 'auto',
    marginBottom: SIZES.margin * 0.5,
    width: SIZES.width * 0.9,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black overlay
    justifyContent: 'flex-end', // Push modal card to the bottom
    alignItems: 'center',
  },
  modalCard: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  iconContainer: {
    width: SIZES.width * 0.2,
    height: SIZES.height * 0.1,
    borderRadius: SIZES.radius * 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.margin,
    backgroundColor: COLORS.lightgray,
    padding: SIZES.padding * 3,
  },
  modalIcon: {
    width: SIZES.width * 0.15,
    height: SIZES.height * 0.1,
    tintColor: COLORS.primary,
  },
  modalTitle: {
    ...FONTS.Bold20,
    fontWeight: '700',
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: SIZES.margin,
  },
  modalDescription: {
    ...FONTS.Regular10,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: SIZES.margin,
    paddingHorizontal: SIZES.padding,
  },
});

export default styles;
