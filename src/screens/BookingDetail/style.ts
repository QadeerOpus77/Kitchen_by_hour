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
    ...commonStyles.commonShadow,
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentAround,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding / 2,
    paddingVertical: SIZES.padding * 0.5,
    borderRadius: SIZES.radius,
    marginHorizontal: SIZES.margin * 0.5,
  },
  mapIcon: {
    width: SIZES.large,
    height: SIZES.large * 1.5,
    resizeMode: 'contain',
  },
  address: {
    ...FONTS.Regular10,
    color: COLORS.gray,
  },
  title: {
    ...FONTS.Medium13,
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
    ...FONTS.Regular10,
    color: COLORS.darkGray,
  },
  value: {
    ...FONTS.Regular10,
  },
  uploadBoxWrapper: {
    alignItems: 'center',
    marginTop: SIZES.margin * 0.5,
  },
  uploadBox: {
    ...commonStyles.justifyContentCenter,
    ...commonStyles.alignItemsCenter,
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.15,
    borderRadius: SIZES.radius,
    borderWidth: 2,
    borderColor: COLORS.borderColor,
    borderStyle: 'dashed',
    backgroundColor: COLORS.white,
    marginBottom: SIZES.margin / 2,
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
  button: {
    backgroundColor: COLORS.ThemeColor,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.input,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: SIZES.margin,
  },
});
