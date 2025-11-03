import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
    successContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#B97A2A',
        padding: 15,
        borderRadius: 8,
        width: '90%',
    },
    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.error,
        padding: 15,
        borderRadius: 8,
        width: '90%',
    },
    textContainer: {
        marginLeft: 10,
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    text2: {
        color: 'white',
        fontSize: 14,
        marginTop: 2,
    },
});
