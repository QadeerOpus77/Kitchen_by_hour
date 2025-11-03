import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';

interface AuthFooterProps {
    message?: string; // e.g. "Not a member?"
    linkText?: string; // e.g. "Sign up"
    targetScreen: any; // Navigation target
    containerStyle?: StyleProp<ViewStyle>;
    messageStyle?: StyleProp<TextStyle>;
    linkStyle?: StyleProp<TextStyle>;
}

const AuthFooter: React.FC<AuthFooterProps> = ({
    message = "Don't have an account?",
    linkText,
    targetScreen,
    containerStyle,
    messageStyle,
    linkStyle,
}) => {
    const navigation = useNavigation<any>();

    return (
        <View style={[styles.signupContainer, containerStyle]}>
            <Text style={[styles.member, messageStyle]}>{message}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(targetScreen)}>
                <Text style={[styles.signupLink, linkStyle]}>{linkText}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AuthFooter;
