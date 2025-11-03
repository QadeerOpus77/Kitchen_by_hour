import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Animated,
} from 'react-native';
import style from './style';
import { images } from '../../constant';
import { HeaderProps } from '../types';
import { navigate } from '../../navigation/Stack/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  avatarSource = images.user,
  showSearch = true,
}) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const widthAnim = useRef(new Animated.Value(0)).current;

  const toggleSearch = () => {
    const toValue = searchVisible ? 0 : 1;
    Animated.timing(widthAnim, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setSearchVisible(!searchVisible);
    });
  };

  const onAvatarPress = () => {
    navigate({
      name: NavigationStrings.PROFILE_STACK as keyof RootStackParamList,
    });
  }

  const inputWidth = widthAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '70%'], // Adjust how wide the input should be
  });

  return (
    <View style={style.headerContainer}>
      {/* Left Side: Avatar + Title */}
      <View style={style.titleContainer}>
        <TouchableOpacity onPress={onAvatarPress} style={style.avatarButton}>
          <Image source={avatarSource} style={style.avatarImage} resizeMode="cover" />
        </TouchableOpacity>

        <Text style={style.headerTitle}>
          {title}
          {'\n'}
          <Text style={style.headerSubtitle}>{subtitle}</Text>
        </Text>
      </View>

      {/* Right Side: Search Input / Search Button */}
      <View style={style.headerContainer}>
        {/* {!searchVisible && ( */}
        <TouchableOpacity onPress={toggleSearch} style={style.iconButton}>
          <Image
            source={images.search}
            style={style.iconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
        {/* )} */}

        {/* {searchVisible && (
          <Animated.View style={[style.searchBox, { width: inputWidth }]}>
            <TextInput
              placeholder="Search..."
              placeholderTextColor="#888"
              value={searchText}
              onChangeText={setSearchText}
              style={style.searchInput}
              autoFocus
            />
            <TouchableOpacity onPress={toggleSearch}>
              <Text style={style.cancelText}>✕</Text>
            </TouchableOpacity>
          </View>
        )} */}
      </View>
    </View>
  );
};

export default Header;
