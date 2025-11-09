import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, commonStyles, FONTS, SIZES } from '../../constant';

const { width } = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightgray,
  },
  headerBackground: {
    height: SIZES.height * 0.25,

    justifyContent: 'flex-start',
    paddingTop: SIZES.padding,
    borderBottomLeftRadius: SIZES.radius * 3,
    borderBottomRightRadius: SIZES.radius * 3,
    overflow: 'hidden',
  },
  TimerContainer: {
    // flex: 1,
    ...commonStyles.justifyContentCenter,
    ...commonStyles.alignItemsCenter,
    padding: SIZES.padding,
    borderRadius: SIZES.radius * 2,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    position: 'absolute',
    top: SIZES.height * 0.15,
    backgroundColor: COLORS.white,
    ...commonStyles.commonShadow,
    zIndex: 100,
  },
  counter: {
    ...FONTS.Medium32,
    color: COLORS.darkBlue,
    marginBottom: SIZES.margin,
  },
  btn: {
    backgroundColor: COLORS.ThemeColor,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.input,
    width: SIZES.width * 0.6,
    alignSelf: 'center',
  },
  disabledBtn: {
    backgroundColor: COLORS.inActiveColor,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.input,
    width: SIZES.width * 0.6,
    alignSelf: 'center',
  },
  history: {
    flex: 1,
    paddingTop: SIZES.height * 0.1,
    paddingHorizontal: SIZES.padding,
  },
  title: {
    ...FONTS.Medium15,
  },
  timeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    margin: 16,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Shadow for Android
    elevation: 3,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightgray || '#F5F5F5',
    paddingBottom: 15,
  },
  dayText: {
    ...FONTS.Regular10,
    color: COLORS.black,
    // marginBottom: 4,
  },
  dateText: {
    ...FONTS.Regular10,
  },
  timeSection: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  time: {
    ...FONTS.Medium10,
    color: COLORS.black,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    fontSize: 14,
    color: COLORS.darkGray || '#757575',
    fontWeight: '500',
  },
  buttonContainer: {
    alignItems: 'center',
    padding: 20,
  },

  timeDate: {
    flexDirection: 'row',
    ...commonStyles.justifyContentBetween,
    padding: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
    ...commonStyles.alignItemsCenter,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
  },
  row: {},
  valueRow: {
    flexDirection: 'row',
    gap: SIZES.margin,
  },
  checkInTime: {},
  option: {
    ...FONTS.Regular10,
  },
  value: {
    ...FONTS.Regular10,
    color: COLORS.ThemeColor,
  },
});

export default style;
