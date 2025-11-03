import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.h10,
    },
    inputWrapper: {
        flexDirection: 'column',
        paddingHorizontal: SIZES.h19,
    },
    textInput: {
        flex: 1,
        color: COLORS.darkGray,
        textAlignVertical: 'center',
        borderWidth: 1,
        borderColor: COLORS.borderColor,
        paddingHorizontal: SIZES.h15,
        borderRadius: SIZES.h10,
        ...FONTS.Regular16,
    },
    label: {
        color: COLORS.black,
        ...FONTS.Regular14,
    },
    passwordIcon: {
        width: SIZES.width * 0.04,
        height: SIZES.height * 0.11,
        resizeMode: 'contain',
        tintColor: COLORS.ThemeColor
    },
    passwordContainer: {
        position: 'absolute',
        right: SIZES.h30,
    },
    errorText: {
        color: COLORS.red,
        ...FONTS.Regular9_5,
        marginLeft: SIZES.h20,
    },
    rightIconContainer: {
        position: 'absolute',
        right: SIZES.h10,
        padding: SIZES.h10,
    },
    rightIcon: {
        width: SIZES.h25,
        height: SIZES.h25,
        resizeMode: 'contain'
    },
});

export default styles;
