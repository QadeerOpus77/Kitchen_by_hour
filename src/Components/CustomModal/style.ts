import { StyleSheet } from 'react-native';
import { COLORS, commonStyles, FONTS, SIZES } from '../../constant';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'flex-end', // modal appears from bottom
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalCard: {
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    borderTopLeftRadius: SIZES.radius * 2,
    borderTopRightRadius: SIZES.radius * 2,
    position: 'absolute',
    bottom: 0,
    marginBottom: SIZES.margin * 4,
    width: '100%',
  },
  modalTitle: {
    ...FONTS.Bold20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: SIZES.margin,
    color: COLORS.darkGray,
  },
  modalDescription: {
    ...FONTS.Regular12,
    textAlign: 'center',
    color: COLORS.gray,
    marginVertical: SIZES.margin,
  },
  modalPrimaryButton: {
    backgroundColor: COLORS.ThemeColor,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.input,
    width: SIZES.width * 0.9,
    alignSelf: 'center',
    marginTop: SIZES.margin,
  },
  confirmText: {
    color: COLORS.white,
    ...FONTS.Regular14,
  },
  modalCancelButton: {
    textAlign: 'center',
    color: COLORS.ThemeColor,
    marginTop: SIZES.margin,
    ...FONTS.Regular10,
  },
  iconContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: COLORS.lightgray,
    width: SIZES.width * 0.2,
    height: SIZES.height * 0.1,
    borderRadius: SIZES.radius * 10,
  },
  modalIcon: {
    width: SIZES.width * 0.15,
    height: SIZES.height * 0.09,
    resizeMode: 'contain',
  },
});
