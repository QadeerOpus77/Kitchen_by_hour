import React, { ReactNode, useEffect, useRef } from 'react';
import {
    Modal,
    View,
    TouchableOpacity,
    Text,
    Image,
    Animated,
    Easing,
    Pressable,
    StyleProp,
    ViewStyle,
    useWindowDimensions,
    Platform,
    ImageStyle,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS } from '../../constant';

interface CustomModalProps {
    isVisible: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    icon?: any;
    children?: ReactNode;
    showConfirmButton?: boolean;
    confirmText?: string;
    onConfirm?: () => void;
    showCancelButton?: boolean;
    cancelText?: string;
    blurBackground?: boolean;
    style?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<ViewStyle>;
    infoStyle?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<ImageStyle>;
    IconConatinerStyle?: StyleProp<ViewStyle>;
}

const CustomModal: React.FC<CustomModalProps> = ({
    isVisible,
    onClose,
    title,
    description,
    icon,
    children,
    showConfirmButton = false,
    confirmText = 'Confirm',
    onConfirm,
    showCancelButton = true,
    cancelText = 'Cancel',
    blurBackground = true,
    titleStyle,
    infoStyle,
    IconConatinerStyle,
    iconStyle,
    style,
}) => {
    const slideAnim = useRef(new Animated.Value(0)).current;
    const { height } = useWindowDimensions();

    useEffect(() => {
        if (isVisible) {
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 200,
                easing: Easing.in(Easing.ease),
                useNativeDriver: true,
            }).start();
        }
    }, [isVisible]);

    const translateY = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, height / 2.5],
    });

    if (!isVisible) return null;

    const Content = (

        <SafeAreaView style={styles.safeArea}>
            <KeyboardAwareScrollView
                style={{ flex: 1, }}
                contentContainerStyle={{ paddingBottom: 20 }}
                enableOnAndroid={true}
                extraScrollHeight={Platform.OS === 'ios' ? 40 : 0}
                keyboardShouldPersistTaps="handled"
            >

                <Animated.View
                    style={[
                        styles.modalCard,
                        style,
                        {
                            transform: [{ translateY }],
                            maxHeight: height * 0.7,
                        },
                    ]}
                >
                    {icon && (
                        <TouchableOpacity style={IconConatinerStyle} onPress={onClose}>
                            <Image source={icon} style={iconStyle} />
                        </TouchableOpacity>
                    )}

                    {title && <Text style={titleStyle}>{title}</Text>}
                    {description && <Text style={infoStyle}>{description}</Text>}

                    {children}

                    {showConfirmButton && (
                        <TouchableOpacity
                            style={styles.modalPrimaryButton}
                            activeOpacity={0.8}
                            onPress={onConfirm}
                        >
                            <Text style={styles.confirmText}>{confirmText}</Text>
                        </TouchableOpacity>
                    )}

                    {showCancelButton && (
                        <TouchableOpacity onPress={onClose} activeOpacity={0.7}>
                            <Text style={styles.modalCancelButton}>{cancelText}</Text>
                        </TouchableOpacity>
                    )}
                </Animated.View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );

    return (
        <Modal
            transparent
            visible={isVisible}
            animationType="fade"
            onRequestClose={onClose}
        >
            {blurBackground ? (
                <BlurView
                    style={styles.modalOverlay}
                    blurType="light"
                    blurAmount={10}
                    reducedTransparencyFallbackColor="rgba(0,0,0,0.7)"
                >
                    <Pressable style={styles.backdrop} onPress={onClose} />
                    {Content}
                </BlurView>
            ) : (
                <View style={styles.modalOverlay}>
                    <Pressable style={styles.backdrop} onPress={onClose} />
                    {Content}
                </View>
            )}
        </Modal>
    );
};

export default CustomModal;
