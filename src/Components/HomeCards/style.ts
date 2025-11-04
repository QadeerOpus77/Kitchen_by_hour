import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constant';

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  content: {
    padding: 15,
  },

  title: {
    ...FONTS.Bold16,
    color: COLORS.black,
    marginBottom: 4,
  },

  address: {
    ...FONTS.Medium12,
    color: COLORS.gray,
    marginBottom: 8,
  },

  description: {
    ...FONTS.Regular12,
    color: COLORS.darkGray,
    lineHeight: 18,
    marginBottom: 15,
  },

  button: {
    backgroundColor: COLORS.ThemeColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },

  buttonText: {
    ...FONTS.Medium13,
    color: COLORS.white,
    fontWeight: '600',
  },
});

export default styles;
