// src/screens/BookNow/BookNow.tsx
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
  TouchableWithoutFeedback,
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

// <-- NEW: role imports
import { useRoleState } from '../../redux/Hook/useRole';
import { RoleType } from '../../redux/Enums/RoleEnum';

const { height, width } = Dimensions.get('window');

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

  // <-- NEW: get selected role from redux
  const { selectedRole } = useRoleState();

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
  const thanksScale = useRef(new Animated.Value(0)).current;
  const thanksRotate = useRef(new Animated.Value(0)).current;

  // Confetti animation values
  const confetti1 = useRef(new Animated.Value(0)).current;
  const confetti2 = useRef(new Animated.Value(0)).current;
  const confetti3 = useRef(new Animated.Value(0)).current;
  const confetti4 = useRef(new Animated.Value(0)).current;

  // 👇 Close card when tapping outside
  const handleOutsidePress = () => {
    if (showCard) {
      toggleCard();
      setIsCardOpen(false);
    }
  };

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

  // 👇 Celebration animation for thank you modal
  const startCelebration = () => {
    Animated.parallel([
      // Main modal animation
      Animated.spring(thanksScale, {
        toValue: 1,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(thanksAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(thanksRotate, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(thanksRotate, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
      // Confetti animations
      Animated.timing(confetti1, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(confetti2, {
        toValue: 1,
        duration: 1700,
        useNativeDriver: true,
      }),
      Animated.timing(confetti3, {
        toValue: 1,
        duration: 1600,
        useNativeDriver: true,
      }),
      Animated.timing(confetti4, {
        toValue: 1,
        duration: 1800,
        useNativeDriver: true,
      }),
    ]).start();
  };


  const handlePress = () => {
    if (RoleType.ADMINISTRATOR) {
      navigate({ name: NavigationStrings.AVAILABILITY as keyof RootStackParamList });
    } else {
      setShowDatePicker(true);
    }
  };
  // Handle Booking
  const handleBooking = () => {
    // <-- NEW: If admin, navigate to View Availability and return
    // if (selectedRole === RoleType.ADMINISTRATOR) {
    //   navigate({ name: NavigationStrings.AVAILABILITY as keyof RootStackParamList });
    //   return;
    // }

    // otherwise keep existing behavior (open booking modal / show thanks)
    if (!showCard) {
      toggleCard();
      setIsCardOpen(true);
      return;
    }
    setShowThanks(true);
    startCelebration();
  };

  // 👇 Close thank you modal and go back
  const handleThankYouClose = () => {
    Animated.parallel([
      Animated.timing(thanksAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(thanksScale, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShowThanks(false);
      goBack();
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

  // 👇 Confetti element renderer
  const renderConfetti = (animValue: Animated.Value, left: number, color: string, delay: number = 0) => {
    return (
      <Animated.View
        style={{
          position: 'absolute',
          left: left,
          top: height * 0.2,
          width: 10,
          height: 10,
          backgroundColor: color,
          borderRadius: 5,
          transform: [
            {
              translateY: animValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, height * 0.6],
              }),
            },
            {
              translateX: animValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, (Math.random() - 0.5) * 200],
              }),
            },
            {
              rotate: animValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '720deg'],
              }),
            },
          ],
          opacity: animValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 1, 0],
          }),
        }}
      />
    );
  };

  return (
    <SafeAreaView style={style.container}>
      {/* 👇 Touchable overlay to close card */}
      {showCard && (
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.0)',
              zIndex: 0,
            }}
          />
        </TouchableWithoutFeedback>
      )}

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

      {/* Address / Map (location container preserved) */}
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

      {/* Booking Card (unchanged) */}
      {showCard && (
        <Animated.View
          style={[
            style.bookingContainer,
            { transform: [{ translateY: slideAnim }], zIndex: 2 },
          ]}
        >
          <Text style={style.bookingTitle}>Booking Detail</Text>

          <View style={style.cardData}>
            {/* Date Picker */}
            <View style={style.inputContainer}>
              <Text style={style.label}>Select Date</Text>
              <TouchableOpacity
                style={style.inputBox}
                // onPress={() => setShowDatePicker(true)}
                onPress={handlePress}
              >
                <Text style={style.inputText}>
                  {date ? date.toLocaleDateString() : 'dd/mm/yy'}
                </Text>
                <TouchableOpacity
                  style={style.rightIconContainer}
                  // onPress={() => setShowDatePicker(true)}
                  onPress={handlePress}
                >
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
                <TouchableOpacity
                  style={style.rightIconContainer}
                  onPress={() => setShowTimePicker(true)}
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

      {/* Animated Thank You with Celebration */}
      {showThanks && (
        <Animated.View
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            opacity: thanksAnim,
            zIndex: 999,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Animated.View
            style={[
              style.thankYouContainer,
              {
                transform: [{ scale: thanksScale }],
              },
            ]}
          >
            <Image source={images.thankYou} style={style.thankYouImg} />
            <Text style={style.thankYou}>Thank You For Booking a Tour!</Text>
            <Text style={style.thankYouDesc}>This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate.</Text>

            {/* 👇 Close button */}
            <Button title={'Done'} style={style.bookButton} onPress={handleThankYouClose} />
          </Animated.View>
        </Animated.View>
      )}

      {/* Book Button - LABEL CHANGES BASED ON ROLE, BEHAVIOR HANDLED IN handleBooking */}
      <Button
        title={selectedRole === RoleType.ADMINISTRATOR ? 'View Availability' : 'Book Tour'}
        style={style.bookButton}
        onPress={handleBooking}
      />
    </SafeAreaView>
  );
};

export default BookNow;