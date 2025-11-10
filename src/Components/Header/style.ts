import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constant';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.padding * 0.5,
    backgroundColor: COLORS.white,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  avatarButton: {
    width: SIZES.large * 3,
    height: SIZES.large * 3,
    overflow: 'hidden',
  },
  avatarImage: {
    width: SIZES.large * 3,
    height: SIZES.large * 3,
    borderRadius: SIZES.radius * 100,
  },
  headerTitle: {
    marginHorizontal: SIZES.padding * 0.5,
    ...FONTS.Regular16,
    color: COLORS.black,
  },
  headerSubtitle: {
    ...FONTS.Regular10,
    color: COLORS.black,
  },
  iconButton: {
    backgroundColor: COLORS.ThemeColor,
    height: SIZES.large * 2,
    width: SIZES.large * 2,
    borderRadius: SIZES.radius * 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    height: SIZES.large,
    width: SIZES.large,
  },
  // searchBox: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: COLORS.borderColor,
  //   borderRadius: 20,
  //   paddingHorizontal: 10,
  //   height: 40,
  //   overflow: 'hidden',
  // },

  // searchInput: {
  //   flex: 1,
  //   ...FONTS.Regular14,
  //   alignItems: 'center',
  // },

  // cancelText: {
  //   // marginLeft: 8,
  //   fontSize: SIZES.h24,
  //   color: COLORS.red,
  //   alignSelf: 'center',
  // },
});
