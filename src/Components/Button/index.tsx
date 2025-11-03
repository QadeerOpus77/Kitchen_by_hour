import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import styles from './styles';
import { GradientButtonProps } from '../types';
import { COLORS } from '../../constant';

const SimpleButton: React.FC<GradientButtonProps> = ({
    title,
    gradientStyle,
    textStyle,
    disabled = false,
    camera,
    gallery = false,
    cancel = false,
    ...touchableProps
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.7}
            style={[styles.defaultGradientStyle, gradientStyle, disabled && { backgroundColor: '#cccccc' }]}
            {...touchableProps}
        >
            {camera && (
                <Image source={camera} style={styles.cameraImage} />
            )}
            <Text
                style={[
                    styles.defaultTextStyle,
                    textStyle,
                    gallery && { color: COLORS.black },
                    cancel && { color: COLORS.ThemeColor }
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default SimpleButton;
