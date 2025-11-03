import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constant';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding*.5,
    backgroundColor: COLORS.white,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  avatarButton: {
    width: SIZES.h40,
    height: SIZES.h40,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%', 
    borderRadius: 20,
  },
  headerTitle: {
    marginHorizontal:SIZES.padding*.5,
    ...FONTS.Medium18,
    color: COLORS.black,
  },
  headerSubtitle: {
    ...FONTS.Regular12,
    color: COLORS.gray,
    marginTop: 2,
  },
  // rightIconsContainer: {
  //   flexDirection: 'row',
  //   justifyContent:'center',
  //   alignContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor:COLORS.ThemeColor,
  //   borderRadius:'50%',
  //   overflow:'hidden',
  //   width:SIZES.h40,
  //   height:SIZES.h40
  // },
  iconButton: {
    backgroundColor:COLORS.ThemeColor,
    height:SIZES.width*.1,
    width:SIZES.width*.1,
    borderRadius:'50%',
    justifyContent:'center',
    alignItems:'center',
  },
  iconImage: {
    // tintColor:COLORS.ThemeColor,
    height: SIZES.height*.03,

  },
  searchBox: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: COLORS.borderColor,
  borderRadius: 20,
  paddingHorizontal: 10,
  height: 40,
  overflow: 'hidden',
},

searchInput: {
  flex: 1,
  ...FONTS.Regular14,
  alignItems:'center'
},

cancelText: {
  // marginLeft: 8,
  fontSize:SIZES.h24,
  color: COLORS.red,
  alignSelf:'center'
},

});
