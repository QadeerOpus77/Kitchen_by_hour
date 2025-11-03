import React from 'react';
import { StatusBar, View, StatusBarStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomStatusBarProps } from '../types';

export default function CustomStatusBar({
    backgroundColor,
    barStyle = 'light-content',
}: CustomStatusBarProps) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ height: insets.top, backgroundColor }}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
        </View>
    );
}
