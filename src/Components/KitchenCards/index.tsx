import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import styles from './style';
import { images } from '../../constant';
import { KitchenCards } from '../types';

interface DynamicKitchenCardProps {
    data: KitchenCards[];
    showPrice?: boolean;
    onPress?: (item: KitchenCards) => void;   // 👈 Parent handles press action
}

const KitchenCard: React.FC<DynamicKitchenCardProps> = ({
    data,
    showPrice = false,
    onPress,
}) => {
    const renderItem = ({ item }: { item: KitchenCards }) => (
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={() => onPress?.(item)}>
                <ImageBackground
                    source={images.Kitchencard}
                    style={styles.imageBackground}
                    imageStyle={styles.image}
                    resizeMode="cover"
                >
                    <View
                        style={[
                            styles.textContainer,
                            showPrice && styles.textContainerWithPrice,
                        ]}
                    >
                        <Text style={styles.title}>{item.title}</Text>
                        {showPrice && (
                            <Text>
                                <Text style={styles.price}>${item.price}</Text>
                                <Text style={styles.permonth}>/Month</Text>
                            </Text>
                        )}
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default KitchenCard;
