import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './style';
import { images } from '../../constant';
import { Button } from '..';

interface CardsProps {
  onExplore?: (id: string) => void;
}

interface KitchenData {
  id: string;
  title: string;
  address: string;
  description: string;
  image: any;
}

const data: KitchenData[] = [
  {
    id: '1',
    title: 'Location A',
    address: '2389 Tripaldi Way, Hayward',
    description:
      'Looking for dedicated kitchen pods with your own controlled access? Pod size ranges 400–800 sq ft. Rent $4,800 – $8,500/mo.',
    image: images.kitchenA,
  },
  {
    id: '2',
    title: 'Location B',
    address: '1429 Mission St, San Francisco',
    description:
      'Modern shared kitchen with all necessary appliances and access control. Rent $5,200 – $9,000/mo.',
    image: images.kitchenA,
  },
];

const LocationCards: React.FC<CardsProps> = ({ onExplore }) => {
  const renderItem = ({ item }: { item: KitchenData }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onExplore?.(item.id)}
        >
          <Button title='Explore Kitchen' style={styles.button}></Button>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default LocationCards;
