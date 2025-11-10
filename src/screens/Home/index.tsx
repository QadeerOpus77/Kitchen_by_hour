import React, { useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Header from '../../Components/Header';
import style from './style';
import { Slider, LocationCards, KitchenCards, Container } from '../../Components';
import { kitchenCardData } from '../../config';
import NavigationStrings from '../../navigation/NavigationStrings';
import { images } from '../../constant';

const Home = () => {
  const navigation = useNavigation<any>();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Handle Android back button
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (selectedLocation) {
          handleBackPress();
          return true; // Prevent default back behavior
        }
        return false; // Allow default back behavior (exit app)
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [selectedLocation])
  );

  // Disable iOS swipe gesture when in kitchen selection
  React.useEffect(() => {
    navigation.setOptions({
      gestureEnabled: !selectedLocation,
    });
  }, [navigation, selectedLocation]);

  const handleExplorePress = useCallback((id: string) => {
    setSelectedLocation(id);
  }, []);

  const handleBackPress = useCallback(() => {
    setSelectedLocation(null);
  }, []);

  const handleKitchenSelect = useCallback((kitchenId: any) => {
    navigation.navigate(NavigationStrings.BOOKING_STACK, {
      locationId: selectedLocation,
      kitchenId: kitchenId
    });
  }, [selectedLocation, navigation]);

  return (
    <Container style={style.container}>
      <Header title="Alex William" subtitle="Warner Bros" />

      {selectedLocation ? (
        // 🧾 Kitchen Selection Screen
        <View style={style.detailContainer}>
          {/* Custom Back Button */}

          <Text style={style.title}>Choose Kitchen</Text>

          <KitchenCards
            data={kitchenCardData}
            onPress={(kitchenId) => handleKitchenSelect(kitchenId)}
          // onPress={handleKitchenSelect}
          />
        </View>
      ) : (
        // 🏠 Home Screen - Locations
        <View style={style.container}>
          <Text style={style.title}>Our Kitchens Locations</Text>
          <Slider />
          <LocationCards onExplore={handleExplorePress} />
        </View>
      )}

      <Image source={images.chat} style={style.chatIcon} />
    </Container>
  );
};

export default Home;