import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';
import { panHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';

const styles = StyleSheet.create({
  listContainer: {},
  cardContainer: {
    marginBottom: SIZES.margin * 0.5,
  },
  image: {
    borderRadius: SIZES.radius * 1.5,
  },
  title: {
    ...FONTS.Regular14,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius * 1.5,
    width: 'auto',
    padding: SIZES.padding * 0.5,
    margin: SIZES.padding * 0.5,
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imageBackground: {
    width: '100%',
    height: SIZES.height * 0.2,
    justifyContent: 'flex-end',
    borderRadius: SIZES.radius * 1.5,
  },
});

export default styles;
