import { StyleSheet } from 'react-native';
import { FONTS, SIZES } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  dayContainer: {
    width: SIZES.width * 0.15,
    height: SIZES.height * 0.11,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bookedContainer: {
    backgroundColor: '#0D284A',
  },
  dayText: {
    color: '#333333',
  },
  disabledText: {
    color: '#D3D3D3',
  },
  bookedText: {
    color: '#FFFFFF',
  },
  bookedTag: {
    ...FONTS.Regular5,
    backgroundColor: '#3A8DFF',
    color: '#FFFFFF',
    paddingHorizontal: SIZES.padding / 3,
    borderRadius: SIZES.radius,
  },
});
