import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export interface LogoProps {
  source: any;         // ✅ must be passed from parent
  text?: string;
  size?: number;       // ✅ new optional prop
}

const Logo: React.FC<LogoProps> = ({ source, text, size = 100 }) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={[styles.logo, { width: size, height: size }]} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    resizeMode: 'contain',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
