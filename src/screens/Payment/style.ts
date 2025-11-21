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
    width: SIZES.medium * 1.5,
    height: SIZES.large,
    resizeMode: 'contain',
  },
  address: {
    ...FONTS.Regular10,
    color: COLORS.gray,
    paddingHorizontal: SIZES.padding / 2,
  },
  paymentRow: {
    flexDirection: 'row',
    ...commonStyles.justifyContentBetween,
    ...commonStyles.alignItemsCenter,
  },
  title: {
    ...FONTS.Medium13,
    marginVertical: SIZES.margin / 2,
        color:COLORS.black

  },
  add: {
    ...FONTS.Regular10,
    color: COLORS.ThemeColor,
  },
  chargeContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius * 3,
    padding: SIZES.padding,
    marginTop: 12,
  },
  chargeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.margin * 0.1,
  },
  chargeLabel: {
    ...FONTS.Regular10,
    color: COLORS.darkGray,
  },
  chargeValue: {
    ...FONTS.Medium10,
    color: COLORS.black,
  },
  paymentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.radius,
    marginVertical: SIZES.margin * 0.5,
  },
  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentIcon: {
    width: SIZES.large * 2,
    height: SIZES.large * 2,
    marginRight: SIZES.margin,
  },
  paymentLabel: {
    ...FONTS.Medium14,
    // marginBottom: SIZES.margin * 0.5,
  },
  paymentNumber: {
    ...FONTS.Regular12,
    fontWeight: '700',
    color: COLORS.darkGray,
  },
  downArrow: {
    width: SIZES.medium,
    height: SIZES.large,
    tintColor: COLORS.ThemeColor,
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
    marginBottom: SIZES.margin / 2,
  },

  //modal
  modalTitle: {
    ...FONTS.Medium13,
    textAlign: 'center',
    marginBottom: SIZES.margin * 0,
        color:COLORS.black

  },
  modalDescription: {
    color: COLORS.gray,
    marginBottom: SIZES.margin,
    textAlign: 'center',
  },
  modalCard: {},
  iconContainer: {
    backgroundColor: COLORS.ThemeColor,
    padding: SIZES.padding,
    width: SIZES.large * 2,
    height: SIZES.large * 2,
    ...commonStyles.justifyContentCenter,
    ...commonStyles.alignItemsCenter,
    borderRadius: SIZES.radius * 5,
    position: 'absolute',
    right: SIZES.padding,
    top: SIZES.padding,
  },
  modalIcon: {
    width: SIZES.medium * 1.5,
    height: SIZES.medium * 1.5,
    resizeMode: 'contain',
  },

  cardForm: {},
  inputGroup: {
    marginBottom: 10,
  },
  modal: {},
  inputtitle: {
    marginVertical: SIZES.margin / 3,
    ...FONTS.Regular9_5,
        color:COLORS.black

  },

  input: {
    borderColor: COLORS.borderColor,
    ...commonStyles.alignItemsCenter,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    paddingHorizontal: SIZES.padding / 2,
    paddingVertical: SIZES.padding * 0.5,
    backgroundColor: COLORS.white,
    ...FONTS.Regular10,
    height: SIZES.input,
  },
  calendarIcon: {
    position: 'absolute',
    right: SIZES.h10,
    bottom: SIZES.h15,
    width: SIZES.large,
    height: SIZES.large,
    resizeMode: 'contain',
    tintColor: COLORS.ThemeColor,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thankYouContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignContent: 'center',
    width: SIZES.width,
  },
  thankYou: {
    ...FONTS.Bold26,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding * 2,
        color:COLORS.black

    // marginBottom: SIZES.height * 0.3,
  },
  thankYouDesc: {
    ...FONTS.Medium10,
    color: COLORS.darkGray,
    paddingHorizontal: SIZES.padding,
    textAlign: 'center',
  },
  thankYouImg: {
    resizeMode: 'contain',
    width: SIZES.width * 0.6,
    height: SIZES.height * 0.6,
    alignSelf: 'center',
    padding: 0,
    marginBottom: -SIZES.height * 0.2,
  },
});
