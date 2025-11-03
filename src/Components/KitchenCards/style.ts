import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';
import { panHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
  },
  cardContainer: {
    marginBottom: SIZES.h20,
  },
  image: {
    borderRadius: SIZES.h20,
  },
  title: {
    ...FONTS.Regular16,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.h20,
    width: 'auto',
    padding: SIZES.padding * 0.5,
    margin: SIZES.padding * 0.5,
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imageBackground: {
    width: '100%',
    height: SIZES.height * 0.23,
    justifyContent: 'flex-end',
    borderRadius: SIZES.h20,
  },
});

export default styles;
