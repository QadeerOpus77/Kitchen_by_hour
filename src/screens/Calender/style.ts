import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.modalColor,
    },
    subContainer: {
        marginHorizontal: SIZES.h15,
        marginTop: SIZES.h20,
    },
    suitContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: SIZES.h10,
    },
});
