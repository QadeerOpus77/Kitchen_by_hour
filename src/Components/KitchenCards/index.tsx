import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import styles from './style';
import { images } from '../../constant';
import { KitchenCards, KitchenCardsProps } from '../types';
import { kitchenCardData } from '../../config';
import NavigationStrings from '../../navigation/NavigationStrings';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

const KitchenCard: React.FC<KitchenCardsProps> = ({ onSelect }) => {
  // const handlePress = () => {
  //   navigate({
  //     name: NavigationStrings.BOOKING_STACK as keyof RootStackParamList,
  //   });
  // };

  const handleBooking = (id: string) => {
    navigate({
      name: NavigationStrings.BOOKING_STACK as keyof RootStackParamList,
      params: { id },
    });
  };
  const renderItem = ({ item }: { item: KitchenCards }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => handleBooking(item.id)}>
        <ImageBackground
          source={images.Kitchencard}
          style={styles.imageBackground}
          imageStyle={styles.image}
          resizeMode="cover"
        >
          {/* <View style={styles.textContainer}> */}
          <Text style={styles.title}>{item.title}</Text>
          {/* </View> */}
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={kitchenCardData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default KitchenCard;
