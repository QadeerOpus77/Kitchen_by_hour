import { DevSettings, StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.lightgray,
    paddingVertical: SIZES.padding / 2,
  },
});
