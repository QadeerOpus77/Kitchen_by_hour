import { StyleSheet } from 'react-native';
import { COLORS, commonStyles, FONTS, SIZES } from '../../constant';



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

  history: {
    flex: 1,
    paddingTop: SIZES.height * 0.1,
    paddingHorizontal: SIZES.padding,
  },
  title: {
    ...FONTS.Medium15,
    marginVertical: SIZES.margin,
        color:COLORS.black

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
        color:COLORS.black

  },
  value: {
    ...FONTS.Regular10,
    color: COLORS.ThemeColor,
  },
  chatIcon: {
    width: SIZES.large * 3,
    height: SIZES.large * 3,
    resizeMode: 'contain',
    position: 'absolute',
    right: SIZES.h10,
    bottom: SIZES.h10 * 10,
    zIndex: 2,
  },
});

export default style;
