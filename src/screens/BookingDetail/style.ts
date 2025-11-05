import { DevSettings, StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS, commonStyles } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.lightgray,
    paddingVertical: SIZES.padding / 2,
    flex: 1,
  },
  addressContainer: {
    flexDirection: 'row',
    gap: SIZES.base,
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentAround,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
    borderRadius: SIZES.radius,
    marginHorizontal: SIZES.margin * 0.5,
  },
  mapIcon: {
    width: SIZES.medium * 1.5,
    height: SIZES.large,
    resizeMode: 'contain',
  },
  address: {
    ...FONTS.Regular11,
    color: COLORS.gray,
  },
  title: {
    ...FONTS.Medium15,
    marginVertical: SIZES.margin,
  },
  timeDate: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
  },
  row: {
    flexDirection: 'row',
    ...commonStyles.justifyContentBetween,
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
    ...commonStyles.alignItemsCenter,
  },
  option: {
    ...FONTS.Regular12,
    color: COLORS.darkGray,
  },
  value: {
    ...FONTS.Regular12,
  },
  uploadBoxWrapper: {
    alignItems: 'center',
    marginTop: SIZES.margin * 0.5,
  },
  uploadBox: {
    ...commonStyles.justifyContentCenter,
    ...commonStyles.alignItemsCenter,
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.1,
    borderRadius: SIZES.radius,
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    borderStyle: 'dashed',
    backgroundColor: COLORS.white,
  },
  addIcon: {
    width: SIZES.large * 3,
    height: SIZES.large * 3,
    tintColor: COLORS.ThemeColor,
    marginBottom: SIZES.margin * 0.5,
    resizeMode: 'contain',
  },
  uploadtxt: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});
