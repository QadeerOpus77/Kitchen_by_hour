import { StyleSheet } from 'react-native';
import { SIZES } from './theme';

const commonStyles = StyleSheet.create({
    /* Column Layouts */
    column: {
        flexDirection: 'column',
    },
    columnReverse: {
        flexDirection: 'column-reverse',
    },
    colCenter: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    colVCenter: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    colHCenter: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    /* Row Layouts */
    row: {
        flexDirection: 'row',
    },
    rowReverse: {
        flexDirection: 'row-reverse',
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowVCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rowHCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    /* Default Layouts */
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    selfCenter: {
        alignSelf: 'center',
    },
    selfEnd: {
        alignSelf: 'flex-end',
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    alignItemsStart: {
        alignItems: 'flex-start',
    },
    alignItemsEnd: {
        alignItems: 'flex-end',
    },
    alignItemsStretch: {
        alignItems: 'stretch',
    },
    justifyContentCenter: {
        justifyContent: 'center',
    },
    justifyContentStart: {
        justifyContent: 'flex-start',
    },
    justifyContentEnd: {
        justifyContent: 'flex-end',
    },
    justifyContentAround: {
        justifyContent: 'space-around',
    },
    justifyContentBetween: {
        justifyContent: 'space-between',
    },
    scrollSpaceAround: {
        flexGrow: 1,
        justifyContent: 'space-around',
    },
    scrollSpaceBetween: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    selfStretch: {
        alignSelf: 'stretch',
    },
    /* Sizes Layouts */
    fill0: {
        flex: 0,
    },
    fill: {
        flex: 1,
    },
    fill2x: {
        flex: 2,
    },
    fill3x: {
        flex: 3,
    },
    wrap: {
        flexWrap: 'wrap',
    },
    fullSize: {
        width: '100%',
    },
    fullWidth: {
        width: '100%',
    },
    halfWidth: {
        width: '50%',
    },
    thirdQuarter: {
        width: '75%',
    },
    quarter: {
        width: '33.33%',
    },
    fullHeight: {},
    textAlignCenter: {
        textAlign: 'center',
    },
    /* Operation Layout */
    mirror: {
        transform: [{ scaleX: -1 }],
    },
    rotate90: {
        transform: [{ rotate: '90deg' }],
    },
    rotate45: {
        transform: [{ rotate: '45deg' }],
    },
    rotate90Inverse: {
        transform: [{ rotate: '-90deg' }],
    },
    rotate180Inverse: {
        transform: [{ rotate: '-180deg' }],
    },
    positionR: {
        position: 'relative',
    },
    positionA: {
        position: 'absolute',
    },
    /* empty view */
    emptyView10: {
        height: SIZES.medium,
    },
    emptyView15: {
        height: SIZES.small * 3,
    },
    emptyView20: {
        height: SIZES.padding,
    },
    emptyView25: {
        height: SIZES.padding + SIZES.small,
    },
    emptyView30: {
        height: SIZES.padding * 1.5,
    },
    emptyView50: {
        height: SIZES.padding * 2.5,
    },
    emptyView70: {
        height: SIZES.padding * 3.5,
    },
    emptyView80: {
        height: SIZES.padding * 4,
    },
    emptyView100: {
        height: SIZES.padding * 5,
    },
    emptyView140: {
        height: SIZES.padding * 7,
    },
    /* width */
    width20: {
        width: '20%',
    },
    width25: {
        width: '25%',
    },
    width30: {
        width: '30%',
    },
    width35: {
        width: '35%',
    },
    width40: {
        width: '40%',
    },
    width45: {
        width: '45%',
    },
    width47: {
        width: '47%',
    },
    width48: {
        width: '48%',
    },
    width50: {
        width: '50%',
    },
    width60: {
        width: '60%',
    },
    width70: {
        width: '70%',
    },
    width90: {
        width: '90%',
    },
    width95: {
        width: '95%',
    },
    width100: {
        width: '100%',
    },

    /* border radius */
    topHorizontalBorderRadius: {
        borderTopRightRadius: SIZES.large,
        borderTopLeftRadius: SIZES.large,
    },
});

export default commonStyles;
