import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, images } from '../../constant';
import { BackHeaderProps } from '../types';
import { goBack } from '../../navigation/Stack/NavigationRef';
import styles from './styles';

const BackHeader: React.FC<BackHeaderProps> = ({ title, tintColor, background = false, outfit = false, share = false, showDownload = false, titleColor, backgroundColor, }) => {

    const onBackPress = () => {
        goBack();
    }


    return (
        <View style={[styles.headerContainer, { backgroundColor: backgroundColor }]} >
            <TouchableOpacity style={[styles.backButton, background && { backgroundColor: COLORS.black }, outfit && { backgroundColor: COLORS.white }]} onPress={onBackPress}>
                <Image source={images.backImage} style={[styles.arrowIcon, { tintColor: tintColor }]} />
            </TouchableOpacity>
            <Text style={[styles.headerText, titleColor && { color: titleColor }]}>
                {title}</Text>
        </View>
    );
};

export default BackHeader;
