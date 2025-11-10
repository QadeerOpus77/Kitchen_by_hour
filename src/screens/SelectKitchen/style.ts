import { StyleSheet, Dimensions } from 'react-native';
import { SIZES, COLORS, FONTS, commonStyles } from '../../constant';
import SignIn from '../SignIn';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: SIZES.padding,
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
