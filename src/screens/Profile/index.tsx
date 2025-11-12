import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Switch,
    TouchableOpacity,
    ScrollView,

} from 'react-native';
import { BackHeader, Button, Container, showToast } from '../../Components';
import { COLORS, SIZES, images } from '../../constant';
import styles from './style';
import NavigationStrings from '../../navigation/NavigationStrings';
import { navigate } from '../../navigation/Stack/NavigationRef';
import { RootStackParamList } from '../../navigation/types/RootStackParamList';
import { menuItems } from '../../config';
import { useRoleState } from '../../redux/Hook/useRole';
import CustomModal from '../../Components/CustomModal';


// Define a flexible navigation type that supports both flat and nested navigation
type NavigationTarget =
    | keyof RootStackParamList
    | {
        stack: keyof RootStackParamList;
        screen: string;
        params?: Record<string, any>;
    };

const Profile = () => {
    const [isPushEnabled, setIsPushEnabled] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { selectedRole } = useRoleState();

    const handleDeactivate = () => {
        setIsModalVisible(true);
    };

    const handleConfirmDeactivate = () => {
        showToast({
            type: 'error',
            text1: 'Deactivated',
            text2: 'Your Account is deactivated',
            visibilityTime: 2000,
        });
        setIsModalVisible(false);
    };

    // ✅ Type-safe navigation handler
    const handleNavigation = (navigateTo?: NavigationTarget) => {
        if (!navigateTo) return;

        if (typeof navigateTo === 'string') {
            // simple route
            navigate({ name: navigateTo as keyof RootStackParamList });
        } else if (
            typeof navigateTo === 'object' &&
            navigateTo.stack &&
            navigateTo.screen
        ) {
            // nested stack navigation
            navigate({
                name: navigateTo.stack as keyof RootStackParamList,
                params: { screen: navigateTo.screen, ...navigateTo.params },
            });
        }
    };

    return (
        <Container scroll={true} style={styles.container}>
            {/* ===== Header ===== */}
            <BackHeader title="Profile" titleColor="black" backgroundColor="white" />

            {/* ===== Profile Section ===== */}
            <View style={styles.profileContainer}>
                <View style={styles.imageWrapper}>
                    <Image source={images.user} style={styles.profileImage} />
                    {/* <TouchableOpacity style={styles.editIcon}>
                        <Image source={images.camera} style={styles.cameraicon} />
                    </TouchableOpacity> */}
                </View>
                <View style={styles.User}>
                    <Text style={styles.name}>Glenn Powell</Text>
                    <Text style={styles.email}>glennpowell@example.com</Text>
                </View>
            </View>

            {/* ===== Menu ===== */}
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.padding,
                }}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    {menuItems.map((item) => {
                        const Wrapper: any =
                            item.type === 'switch' ? View : TouchableOpacity;

                        return (
                            <Wrapper
                                key={item.id}
                                style={styles.menuItem}
                                activeOpacity={item.type === 'switch' ? 1 : 0.8}
                                {...(item.type !== 'switch' && {
                                    onPress: () =>
                                        handleNavigation(
                                            (item.navigateTo as NavigationTarget) ||
                                            ('CHANGE_PASSWORD' as keyof RootStackParamList)
                                        ),
                                })}
                            >
                                <View style={{ flexDirection: 'row', gap: SIZES.h10 }}>
                                    <Image source={item.icon} style={styles.menuicon} />
                                    <Text style={styles.menuLabel}>{item.label}</Text>
                                </View>

                                {item.type === 'switch' ? (
                                    <Switch
                                        value={isPushEnabled}
                                        onValueChange={setIsPushEnabled}
                                        thumbColor={COLORS.white}
                                        trackColor={{
                                            false: COLORS.lightgray,
                                            true: COLORS.ThemeColor,
                                        }}
                                    />
                                ) : (
                                    <Image
                                        source={images.arrow}
                                        style={styles.arrow}
                                        tintColor={COLORS.ThemeColor}
                                    />
                                )}
                            </Wrapper>
                        );
                    })}

                    {/* === Deactivate Account Option === */}
                    <TouchableOpacity
                        style={styles.menuItem}
                        activeOpacity={0.8}
                        onPress={handleDeactivate}
                    >
                        <View style={{ flexDirection: 'row', gap: SIZES.h10 }}>
                            <Image
                                source={images.delete}
                                style={[styles.menuicon, { tintColor: COLORS.ThemeColor }]}
                            />
                            <Text style={styles.menuLabel}>Deactivate My Account</Text>
                        </View>
                        <Image source={images.arrow} style={styles.arrow} />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* ===== Logout Button ===== */}
            <Button
                title="Logout"
                colors={[COLORS.ThemeColor, COLORS.ThemeColor]}
                onPress={() =>
                    navigate({
                        name: NavigationStrings.AUTH_STACK as keyof RootStackParamList,
                    })
                }
                style={styles.logout}
            />

            {/* ===== Deactivate Modal ===== */}

            {/* <CustomModal
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                title="Are you sure you want to deactivate your account?"
                description="This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate."
                icon={images.delete}
                showConfirmButton
                confirmText="Yes, Deactivate My Account"
                onConfirm={handleConfirmDeactivate}
                titleStyle={styles.modalTitle}
                infoStyle={styles.modalDescription}
                style={styles.modalCard}
                iconStyle={styles.modalIcon}
                IconConatinerStyle={styles.iconContainer}
            /> */}

        </Container>
    );
};

export default Profile;
