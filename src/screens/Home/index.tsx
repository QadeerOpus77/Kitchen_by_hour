import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header';
import style from './style';
import { Slider, LocationCards, KitchenCards, Container } from '../../Components';
import { kitchenCardData } from '../../config';
import NavigationStrings from '../../navigation/NavigationStrings';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation<any>();
  const [selectedKitchen, setSelectedKitchen] = useState<string | null>(null);

  const handleExplorePress = (id: string) => {
    setSelectedKitchen(id); // Show detail view
  };

  const handleBackPress = () => {
    setSelectedKitchen(null); // Back to main view
  };

  const handleSelect = (id: string) => {


  };
  return (
    <Container style={style.container}>
      <Header title="Alex William" subtitle="Warner Bros" />
      {
        selectedKitchen ? (
          // 🧾 Detail Screen
          <View style={style.detailContainer} >

            <Text style={style.title}>Choose Kitchen</Text>

            {/* <TouchableOpacity onPress={handleBackPress}>
            <Text style={style.backButton}>← Back</Text>
          </TouchableOpacity> */}

            {selectedKitchen === '1' && (
              <View>
                <KitchenCards
                  data={kitchenCardData}
                  onPress={() => navigation.navigate(NavigationStrings.BOOKING_STACK)}

                // onSelect={handleSelect}
                />
              </View>
            )}

            {
              selectedKitchen === '2' && (
                <View>

                  <KitchenCards
                    data={kitchenCardData}
                    onPress={() => navigation.navigate(NavigationStrings.BOOKING_STACK)}
                  // onSelect={handleSelect}
                  />
                </View>
              )
            }
          </View >
        )

          : (
            // 🏠 Home Screen
            <View style={style.container}>
              <Text style={style.title}>Our Kitchens Locations</Text>
              <Slider />
              <LocationCards onExplore={handleExplorePress} />
            </View>
          )}
    </Container >
  )
};

export default Home;
