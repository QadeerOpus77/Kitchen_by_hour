// src/Components/BookedKitchenCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { COLORS, FONTS, SIZES, commonStyles, images } from '../../constant';

interface BookedKitchenCardProps {
    title: string;
    price: string;
    duration: string;
    image: any;
    bookedDate: string;
    bookedTime: string;
    onPress?: () => void;
}

const BookedKitchenCard: React.FC<BookedKitchenCardProps> = ({
    title,
    onPress,
}) => {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => onPress?.()}>
                <ImageBackground
                    source={images.Kitchencard}
                    style={styles.imageBackground}
                    imageStyle={styles.image}
                    resizeMode="cover"
                >
                    <View style={styles.status}><Text style={styles.statusTxt}>
                        Request Approved
                    </Text></View>
                    <View
                        style={
                            styles.textContainer
                        }
                    >
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {},
    cardContainer: {
        marginBottom: SIZES.margin,
        // width: SIZES.width * 0.9,
    },
    image: {
        borderRadius: SIZES.radius * 1.5,
    },
    title: {
        ...FONTS.Medium14,
        textAlign: 'center',
    },
    status: {
        backgroundColor: '#39FFC080',

        position: 'absolute',
        top: 10,
        right: 10,
        padding: SIZES.padding / 5,
        borderRadius: SIZES.radius
    },
    statusTxt: {
        ...FONTS.Regular8,
        color: COLORS.white
    },
    imageBackground: {
        width: '100%',
        height: SIZES.height * 0.2,
        justifyContent: 'flex-end',
        borderRadius: SIZES.radius * 1.5,
        resizeMode: 'cover',
        position: 'relative'
    },

    textContainer: {
        ...commonStyles.alignItemsCenter,
        ...commonStyles.justifyContentBetween,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius * 2,
        paddingVertical: SIZES.padding * 0.3,
        paddingHorizontal: SIZES.padding,
        margin: SIZES.margin * 0.3,
    },
});

export default BookedKitchenCard;