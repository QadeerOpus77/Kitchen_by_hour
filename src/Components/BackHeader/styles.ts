import { StyleSheet } from 'react-native';
import { FONTS, SIZES, COLORS } from '../../constant';

export default StyleSheet.create({
    headerContainer: {
        width:'55%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.h20,
        marginHorizontal: SIZES.h10,
    },
    backButton: {
        // backgroundColor: COLORS.borderColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.h8,
        borderRadius: SIZES.radius,
    },
    arrowIcon: {
        resizeMode: 'contain',
        width: SIZES.width * 0.05,
        height: SIZES.width * 0.05,
    },
    headerText: {
        color: COLORS.white,
        textAlign: 'center',
        ...FONTS.Medium16,
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center'
        
    },
});
