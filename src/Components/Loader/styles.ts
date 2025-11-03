import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constant';

export default StyleSheet.create({
    loaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: SIZES.width,
        height: SIZES.height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 100,
    },
});
