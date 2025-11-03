import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import styles from './style';
import { COLORS, SIZES, images } from '../../constant';

type PhoneNumberInputProps = {
  value?: string;
  onChange: (phone: string) => void;
  error?: string;
  label?: string;
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value = '',
  onChange,
  error,
  label,
}) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [countryCode, setCountryCode] = useState('+1');
  const [flag, setFlag] = useState('🇺🇸');
  const [phoneInput, setPhoneInput] = useState('');

  useEffect(() => {
    setPhoneInput(value.replace(countryCode, '') || '');
  }, [value]);

  const handlePhoneNumberChange = (text: string) => {
    setPhoneInput(text);
    const fullPhoneNumber = countryCode + text;
    onChange(fullPhoneNumber);
  };

  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View
        style={[
          styles.container,
          { borderColor: error ? COLORS.red : COLORS.borderColor },
        ]}
      >
        {/* Country flag, code & arrow */}
        <TouchableOpacity
          style={styles.flagContainer}
          onPress={() => setPickerVisible(true)}
          activeOpacity={0.7}
        >
          <Text style={styles.flag}>{flag}</Text>
          <Text style={styles.code}>{countryCode}</Text>
          <Image source={images.downArrow} style={styles.arrowImage} />
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.verticalLine} />

        {/* Custom TextInput */}
        <TextInput
          style={styles.textInput}
          placeholder=""
          placeholderTextColor={COLORS.darkGray}
          keyboardType="phone-pad"
          value={phoneInput}
          onChangeText={handlePhoneNumberChange}
        />
      </View>

      {/* Country Picker */}
      <CountryPicker
        show={isPickerVisible}
        lang="en"
        style={{
          modal: {
            height: SIZES.width * 1.5,
            backgroundColor: COLORS.white,
          },
          countryButtonStyles: {
            backgroundColor: COLORS.white,
          },
          textInput: {
            color: COLORS.black,
            backgroundColor: COLORS.white,
          },
        }}
        pickerButtonOnPress={(country) => {
          setCountryCode(country.dial_code);
          setFlag(country.flag);
          setPickerVisible(false);
        }}
        onBackdropPress={() => setPickerVisible(false)}
      />

      {/* Error Message */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default PhoneNumberInput;
