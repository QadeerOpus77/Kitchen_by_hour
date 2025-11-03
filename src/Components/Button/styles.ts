import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

const styles = StyleSheet.create({
  defaultGradientStyle: {
    backgroundColor: COLORS.ThemeColor,
    borderRadius: SIZES.h10,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.input,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: SIZES.h10,
  },
  defaultTextStyle: {
    color: COLORS.white,
    ...FONTS.Regular14,
  },
  cameraImage: {
    width: SIZES.h25,
    height: SIZES.h25,
    resizeMode: 'contain',
  },
});

export default styles;
