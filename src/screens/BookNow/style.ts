import { StyleSheet, Dimensions } from 'react-native';
import { SIZES, COLORS, FONTS } from '../../constant';
import SignIn from '../SignIn';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: -1, // make sure it’s behind everything
    borderBottomRightRadius: SIZES.h30,
    borderBottomLeftRadius: SIZES.h30,
  },

  // 🔹 Kitchen Details Section
  detailsContainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding*.5,
    borderRadius: SIZES.h20,
    // position:'relative'
  },
  title: {
    ...FONTS.Bold20,
  },
  price: {
    ...FONTS.Bold20,
    color: COLORS.ThemeColor,
  },
  duration: {
    ...FONTS.Medium12,
    color: COLORS.ThemeColor,
  },
  description: {
    ...FONTS.Regular14,
    color: COLORS.gray,
    marginBottom: 25,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
    borderRadius: SIZES.h20,
    marginHorizontal: SIZES.h20,
  },

  bookButton: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.7,
    borderRadius: SIZES.h10,
    backgroundColor: COLORS.ThemeColor,
    alignItems: 'center',
    marginHorizontal: SIZES.h20,
    marginTop: 'auto',
    marginBottom: SIZES.h20,
  },
  bookButtonText: {
    ...FONTS.Regular18,
    color: COLORS.white,
  },
  mapIcon: {
    width: SIZES.width * 0.05,
    height: SIZES.height * 0.05,
    resizeMode: 'contain',
  },
  address: {
    ...FONTS.Regular14,
    color: COLORS.gray,
    paddingHorizontal: SIZES.padding * 0.5,
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
    ...FONTS.Bold23,
    marginBottom: SIZES.padding,
  },

  label: {
    ...FONTS.Medium16,
    marginTop: SIZES.h10,
  },
  inputText: {
    ...FONTS.Regular16
  },
  inputContainer: {},
  inputBox: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginBottom: SIZES.padding*.5,
    paddingVertical:SIZES.padding*.5,
    paddingHorizontal:SIZES.padding*.5,
    borderRadius: SIZES.h10,
    backgroundColor: COLORS.white,
    justifyContent:'center',
  },
  rightIconContainer: {
    position: 'absolute',
    right: SIZES.h10,
    padding: SIZES.h10,
  },
  rightIcon: {
    color: COLORS.ThemeColor,
    width: SIZES.h24,
    height: SIZES.h25,
    resizeMode: 'contain',
    tintColor:COLORS.ThemeColor
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
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignContent: 'center',
    width:"auto"
  },
  thankYou: {
    ...FONTS.Bold30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:SIZES.padding*2,
    marginBottom:SIZES.height*.3
  },
  thankYouImg: {
    resizeMode: 'contain',
    width: SIZES.width * 0.6,
    height: SIZES.height * 0.6,
    alignSelf: 'center',
    padding:0,
    marginBottom:-SIZES.height*.2
  },
});
