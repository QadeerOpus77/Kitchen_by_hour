import React, { Fragment } from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import styles from './styles';
import { ContainerProps } from '../types';

const Container: React.FC<ContainerProps> = ({
    children,
    scroll,
    style,
    isPadding = true,
    onLayout,
}: ContainerProps) => {
    const commonScrollViewProps = {
        keyboardShouldPersistTaps: 'handled' as const,
        showsVerticalScrollIndicator: false,
        contentContainerStyle: [
            styles.container2,
            style,
            !isPadding && { paddingHorizontal: 0 },
        ],
    };

    return (
        <Fragment>
            {scroll ? (
                <ScrollView {...commonScrollViewProps}>
                    {children}
                </ScrollView>
            ) : (
                <View
                    onLayout={onLayout}
                    style={[
                        styles.container,
                        style,
                        !isPadding && { paddingTop: 0, paddingHorizontal: 0 },
                    ]}>
                    {children}
                </View>
            )}
        </Fragment>
    );
};

export default Container;
