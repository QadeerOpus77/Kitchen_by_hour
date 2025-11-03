import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, disabled = false }) => {
  return (
    <TouchableOpacity style={[styles.button, disabled && styles.disabled]} onPress={onPress} disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3994FF',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',  
    
  },
  disabled: {
    backgroundColor: '#aaa',
  },
});