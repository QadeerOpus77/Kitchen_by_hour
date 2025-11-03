import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import style from './style';

const data = [
  { id: '1', title: 'Location A' },
  { id: '2', title: 'Location B' },
  { id: '3', title: 'Location C' },
  { id: '4', title: 'Location D' },
  { id: '5', title: 'Location E' },
];

const HorizontalSlider = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <View style={style.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isActive = selectedId === item.id;
          return (
            <TouchableOpacity
              onPress={() => setSelectedId(item.id)}
              style={[
                style.card,
                isActive && style.activeCard, 
              ]}
            >
              <Text
                style={[
                  style.text,
                  isActive && style.activeText, 
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HorizontalSlider;
