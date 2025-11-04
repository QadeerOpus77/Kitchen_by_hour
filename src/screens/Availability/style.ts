import { StyleSheet } from 'react-native';
import { FONTS, SIZES } from '../../constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  dayContainer: {
    width: SIZES.width * 0.15,
    height: SIZES.height * 0.1,
    justifyContent: 'center',
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
    paddingVertical: 2,
    borderRadius: SIZES.radius,
    marginTop: SIZES.margin,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 30,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 6,
  },
  legendText: {
    fontSize: 14,
    color: '#0D284A',
    fontWeight: '500',
  },
});
