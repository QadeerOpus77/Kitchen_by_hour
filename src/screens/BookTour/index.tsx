import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
import style from './style';
import {
  RouteProp,
  useRoute,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import { COLORS, images } from '../../constant';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { BackHeader, Button } from '../../Components';
import { goBack } from '../../navigation/Stack/NavigationRef';


const { height } = Dimensions.get('window');

const kitchenData: Record<
  string,
  {
    title: string;
    description: string;
    price: string;
    image: any;
    duration: string;
  }
> = {
  '1': {
    title: 'Modern Kitchen',
    description:
      'Starts at minimum of 10-hr a month for $500/month, with tier-ed price break at 20 hrs and 40 hrs a month. Rent is month-to-month. No membership required.',
    price: '$500/',
    duration: 'Month',
    image: images.Kitchencard,
  },
  '2': {
    title: 'Classic Kitchen',
    description: 'Elegant wooden finish with a cozy atmosphere.',
    price: '$130/day',
    image: images.Kitchencard,
    duration: 'Month',
  },
  '3': {
    title: 'Minimal Kitchen',
    description: 'Compact and efficient with a minimalist layout.',
    price: '$110/day',
    duration: 'Month',

    image: images.Kitchencard,
  },
};

type KitchenDetailRouteProp = RouteProp<
  { KitchenDetail: { id: string } },
  'KitchenDetail'
>;

const BookNow: React.FC = () => {
  const route = useRoute<KitchenDetailRouteProp>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const kitchen = kitchenData[route?.params?.id ?? '1'];

  // Hooks must be top-level
  const [showCard, setShowCard] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const slideAnim = useRef(new Animated.Value(height)).current;
  const imageHeight = useRef(new Animated.Value(550)).current;
  const thanksAnim = useRef(new Animated.Value(0)).current;

  // Toggle Booking Card
  const toggleCard = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: showCard ? height : height - 800,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(imageHeight, {
        toValue: showCard ? 500 : 300,
        duration: 400,
        useNativeDriver: false,
      }),
    ]).start(() => setShowCard(!showCard));
  };

  // Handle Booking
  const handleBooking = () => {
    if (!showCard) {
      toggleCard();
      setIsCardOpen(true);
      // first open card if not shown
      return;
    }
    setShowThanks(true);
    Animated.timing(thanksAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        goBack()// Navigate to home after animation
      }, 3000);
    });
  };

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) setDate(selectedDate);
  };

  const onChangeTime = (event: any, selectedTime?: Date) => {
    setShowTimePicker(Platform.OS === 'ios');
    if (selectedTime) setTime(selectedTime);
  };

  if (!kitchen) {
    return (
      <SafeAreaView style={style.container}>
        <Text style={style.errorText}>Kitchen not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      <BackHeader tintColor="white" title={isCardOpen ? 'Book Now' : ''} />

      {/* Background Image */}
      <Animated.Image
        source={kitchen.image}
        style={[style.backgroundImage, { height: imageHeight }]}
        resizeMode="cover"

      />

      {/* Kitchen Details */}
      <Animated.View
        style={[
          style.detailsContainer,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [height - 600, height],
                  outputRange: [120, 390],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <View style={style.cardContainer}>
          <Text style={style.title}>{kitchen.title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={style.price}>{kitchen.price}</Text>
            <Text style={style.duration}>{kitchen.duration}</Text>
          </View>
        </View>
        <Text style={style.description}>{kitchen.description}</Text>
      </Animated.View>

      {/* Address / Map */}
      <Animated.View
        style={[
          style.addressContainer,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [height - 800, height],
                  outputRange: [130, 400],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <Image style={style.mapIcon} source={images.mapIcon} />
        <Text style={style.address}>
          1234 Elmwood Drive, Springfield, IL 62704, USA
        </Text>
      </Animated.View>

      {/* Booking Card */}
      {showCard && (
        <Animated.View
          style={[
            style.bookingContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Text style={style.bookingTitle}>Booking Detail</Text>

          <View style={style.cardData}>
            {/* Date Picker */}
            <View style={style.inputContainer}>
              <Text style={style.label}>Select Date</Text>
              <TouchableOpacity
                style={style.inputBox}
                onPress={() => setShowDatePicker(true)}
              >
                <Text style={style.inputText}>
                  {' '}
                  {date ? date.toLocaleDateString() : 'dd/mm/yy'}
                </Text>
                <TouchableOpacity style={style.rightIconContainer} onPress={() => setShowDatePicker(true)}>
                  <Image source={images.calender} style={style.rightIcon} />
                </TouchableOpacity>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                />
              )}
            </View>

            {/* Time Picker */}
            <View style={style.inputContainer}>
              <Text style={style.label}>Select Time</Text>
              <TouchableOpacity
                style={style.inputBox}
                onPress={() => setShowTimePicker(true)}
              >
                <Text style={style.inputText}>
                  {time
                    ? time.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                    : '00:00'}
                </Text>
                <TouchableOpacity style={style.rightIconContainer} onPress={() => setShowTimePicker(true)}
                >
                  <Image source={images.clock} style={style.rightIcon} />
                </TouchableOpacity>

              </TouchableOpacity>
              {showTimePicker && (
                <DateTimePicker
                  value={time}
                  mode="time"
                  display="default"
                  onChange={onChangeTime}
                />
              )}
            </View>
          </View>
        </Animated.View>
      )}
      {/* Book Button */}

      {/* Animated Thank You */}
      {showThanks && (
        <Animated.View
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: thanksAnim,
            transform: [
              {
                scale: thanksAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
              },
            ],
          }}
        >
          <View style={style.thankYouContainer}>

            <Image source={images.thankYou} style={style.thankYouImg} />
            <Text style={style.thankYou}>Thankyou For Booking a Tour </Text>
          </View>
        </Animated.View>
      )}
      <Button title={'Book Tour'} style={style.bookButton} onPress={handleBooking}>

      </Button>
    </SafeAreaView>
  );
};

export default BookNow;
