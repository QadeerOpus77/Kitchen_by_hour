import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
    subContainer: {
        marginTop: SIZES.h20,
        alignItems: 'center',
    },
    logo: {
        width: SIZES.width * 0.4,
        height: SIZES.width * 0.4,
        resizeMode: 'contain',
        marginBottom: SIZES.h30,
    },
});
