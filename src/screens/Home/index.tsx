import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header';
import style from './style';
import { Slider, LocationCards, KitchenCards } from '../../Components';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [selectedKitchen, setSelectedKitchen] = useState<string | null>(null);

  const handleExplorePress = (id: string) => {
    setSelectedKitchen(id); // Show detail view
  };

  const handleBackPress = () => {
    setSelectedKitchen(null); // Back to main view
  };

  const handleSelect = (id: string) => {
    
    // console.log('Selected Station:', id);
  };
    return (
    <SafeAreaView style={style.safeArea}>
      {selectedKitchen ? (
        // 🧾 Detail Screen
        <View style={style.detailContainer}>
          <Header title="Alex William" subtitle="Warner Bros" />
          <Text style={style.title}>Choose Kitchen</Text>

          {/* <TouchableOpacity onPress={handleBackPress}>
            <Text style={style.backButton}>← Back</Text>
          </TouchableOpacity> */}

          {selectedKitchen === '1' && (
            <View>
              <KitchenCards onSelect={handleSelect} />
            </View>
          )}

          {selectedKitchen === '2' && (
            <View>
              <KitchenCards onSelect={handleSelect} />
            </View>
          )}
        </View>
      )

 : (
        // 🏠 Home Screen
        <View style={style.container}>
          <Header title="Alex William" subtitle="Warner Bros" />
          <Text style={style.title}>Our Kitchens Locations</Text>
          <Slider />
          <LocationCards onExplore={handleExplorePress} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
