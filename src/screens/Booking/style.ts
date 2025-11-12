import { StyleSheet, Dimensions } from 'react-native';
import { SIZES, COLORS, FONTS, commonStyles } from '../../constant';
import SignIn from '../SignIn';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightgray,
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: SIZES.width,
    // zIndex: -1, // make sure it’s behind everything
    borderBottomRightRadius: SIZES.radius * 3,
    borderBottomLeftRadius: SIZES.radius * 3,
  },

  // 🔹 Kitchen Details Section
  detailsContainer: {
    ...commonStyles.commonShadow,
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.margin * 0.5,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
    borderRadius: SIZES.radius,
    // position:'relative'
  },
  title: {
    ...FONTS.Bold18,
    marginVertical: SIZES.margin * 0.3,
  },
  price: {
    ...FONTS.Bold15,
    color: COLORS.ThemeColor,
  },
  duration: {
    ...FONTS.Regular10,
    color: COLORS.ThemeColor,
  },
  description: {
    ...FONTS.Regular10,
    color: COLORS.gray,
  },
  addressContainer: {
    flexDirection: 'row',
    gap: SIZES.base,
    ...commonStyles.commonShadow,
    ...commonStyles.alignItemsCenter,
    ...commonStyles.justifyContentAround,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
    borderRadius: SIZES.radius,
    marginHorizontal: SIZES.margin * 0.5,
  },

  bookButton: {
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
  mapIcon: {
    width: SIZES.medium * 1.5,
    height: SIZES.large,
    resizeMode: 'contain',
  },
  address: {
    ...FONTS.Regular10,
    color: COLORS.gray,
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingContainer: {
    padding: SIZES.padding,
  },
  cardData: {
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.h20,
  },

  // 🔹 Booking Card (Modal)

  bookingTitle: {
    ...FONTS.Medium14,
    marginVertical: SIZES.margin,
  },

  label: {
    ...FONTS.Medium10,
    marginTop: SIZES.margin / 2,
  },
  inputText: {
    ...FONTS.Regular10,
  },
  inputContainer: {},
  inputBox: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginBottom: SIZES.padding * 0.5,
    paddingVertical: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding * 0.5,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  rightIconContainer: {
    position: 'absolute',
    right: SIZES.h10,
    padding: SIZES.h10,
  },
  rightIcon: {
    color: COLORS.ThemeColor,
    width: SIZES.h24,
    height: SIZES.h20,
    resizeMode: 'contain',
    tintColor: COLORS.ThemeColor,
  },

  // 🔹 Error Message
  errorText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: height * 0.3,
    color: '#555',
  },
  thankYouContainer: {
    flex: 1,
    height: SIZES.height,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: SIZES.padding,
  },
  thankYou: {
    ...FONTS.Bold23,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding * 2,
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
