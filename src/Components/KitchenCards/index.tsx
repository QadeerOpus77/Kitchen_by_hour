import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import styles from './style';
import { images } from '../../constant';
import { KitchenCards, KitchenCardsProps } from '../types';
import NavigationStrings from '../../navigation/NavigationStrings';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

interface DynamicKitchenCardProps {
  data: KitchenCards[];                     // 👈 dynamic list of kitchens
  onSelect?: (id: string) => void;          // optional custom handler
  showNavigation?: boolean;                 // optional toggle for navigation
  showPrice?: boolean
}

const KitchenCard: React.FC<DynamicKitchenCardProps> = ({
  data,
  onSelect,
  showPrice = false,
  showNavigation = true,
}) => {
  const handlePress = (id: string) => {
    if (showNavigation) {
      navigate({
        name: NavigationStrings.BOOKING_STACK as keyof RootStackParamList,
        params: { id },
      });
    } else if (onSelect) {
      onSelect(id);
    }
  };

  const renderItem = ({ item }: { item: KitchenCards }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => handlePress(item.id)}>
        <ImageBackground
          source={images.Kitchencard}
          style={styles.imageBackground}
          imageStyle={styles.image}
          resizeMode="cover"
        >
          <View
            style={[
              styles.textContainer,
              showPrice && styles.textContainerWithPrice, // change layout when price shown
            ]}
          >
            <Text style={styles.title}>{item.title}</Text>

            {showPrice && (
              <Text>

                <Text style={styles.price}>${item.price}</Text><Text style={styles.permonth}>/Month</Text>
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
