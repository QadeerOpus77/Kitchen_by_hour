import { StyleSheet } from 'react-native';
import { SIZES,COLORS,FONTS } from '../../constant';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    // paddingVertical: SIZES.padding,
  },
  listContainer: {
    paddingHorizontal: SIZES.padding,
    paddingVertical:SIZES.padding,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  card: {
    backgroundColor: COLORS.white,
    width:SIZES.width*.9,
    padding:SIZES.padding,
    borderRadius: SIZES.h10,
    marginBottom: SIZES.padding,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height:SIZES.height*.3,
    borderRadius:SIZES.h10,
    overflow:'hidden'
  },
  content: {
    paddingVertical: SIZES.padding,
  },
  title: {
    ...FONTS.Medium22
  },
  address: {
   ...FONTS.Medium14,
    marginBottom:SIZES.base,
  },
  description: {
    ...FONTS.Regular12,
    marginBottom:SIZES.base,
    // lineHeight: 18,
  },
  button: {
    backgroundColor:COLORS.ThemeColor,
    paddingVertical: SIZES.padding*.5,
    borderRadius: SIZES.h10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    ...FONTS.Regular18
  },
});

export default styles;
