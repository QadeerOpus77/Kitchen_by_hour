import React from 'react';
import Toast from 'react-native-toast-message';
import styles from './styles';
import { View, Text, Platform } from 'react-native';
import { ToastProps } from '../types';

export const showToast = ({ type, text1, text2, visibilityTime = 3000, autoHide = true }: ToastProps) => {
    Toast.show({
        type,
        text1,
        text2,
        visibilityTime,
        autoHide,
    });
};

export const CustomToast = () => (
    <Toast
        position="top"
        topOffset={Platform.OS === 'ios' ? 60 : 30}
        config={{
            success: ({ text1, text2 }) => (
                <View style={styles.successContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>{text1}</Text>
                        {text2 && <Text style={styles.text2}>{text2}</Text>}
                    </View>
                </View>
            ),
            error: ({ text1, text2 }) => (
                <View style={styles.errorContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text1}>{text1}</Text>
                        {text2 && <Text style={styles.text2}>{text2}</Text>}
                    </View>
                </View>
            )
        }}
    />
);