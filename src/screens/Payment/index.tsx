import { View, Text, Image, TouchableOpacity, Alert, Animated, Platform } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { BackHeader, Button, Container, KitchenCards } from '../../Components'
import style from './style'
import { kitchenCardData } from '../../config'
import { COLORS, images } from '../../constant'
import CustomModal from '../../Components/CustomModal'
import { TextInput } from 'react-native-gesture-handler'
import { navigate } from '../../navigation/Stack/NavigationRef'
import NavigationStrings from '../../navigation/NavigationStrings'
import { RootStackParamList } from '../../navigation/types/RootStackParamList'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Payment = () => {
    const [showCardModal, setShowCardModal] = useState(false);
    const [showThanks, setShowThanks] = useState(false);
    const thanksAnim = useRef(new Animated.Value(0)).current;
    const thanksScale = useRef(new Animated.Value(0)).current;

    const [cardData, setCardData] = useState({
        name: '',
        number: '',
        expiry: '',
        cvv: '',
    });

    const handleThanks = () => {
        setShowThanks(true);

        // 🔹 Trigger fade + scale animation
        Animated.parallel([
            Animated.timing(thanksAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.spring(thanksScale, {
                toValue: 1,
                friction: 5,
                tension: 60,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const handleThankYouClose = () => {
        Animated.parallel([
            Animated.timing(thanksAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(thanksScale, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setShowThanks(false);
        });
        navigate({
            name: NavigationStrings.BOTTOM_STACK as keyof RootStackParamList,
            params: {
                screen: NavigationStrings.HOME_STACK, params: { screen: NavigationStrings.BOOK_KITCHEN },
            }
        }
        )

    };

    const handleSaveCard = () => {
        if (!cardData.name || !cardData.number || !cardData.expiry || !cardData.cvv) {
            Alert.alert('Missing Info', 'Please fill all card fields.');
            return;
        }
        console.log('Card saved:', cardData);
        setShowCardModal(false);
    };

    return (
        <Container style={style.container}>
            <BackHeader title="Booking Review" tintColor="black" titleColor="#0D284A" />
            <Container style={style.subContainer} needsKeyboardAvoiding={true}>
                <View>
                    <KitchenCards data={[kitchenCardData[0]]} showPrice />
                </View>
                <View style={style.addressContainer}>
                    <Image style={style.mapIcon} source={images.mapIcon} />
                    <Text style={style.address}>
                        1234 Elmwood Drive, Springfield, IL 62704, USA
                    </Text>
                </View>

                <View style={style.paymentRow}>
                    <Text style={style.title}>Payment Method</Text>
                    <TouchableOpacity onPress={() => setShowCardModal(true)}>
                        <Text style={style.add}>Add Card</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={style.paymentBox}
                    onPress={() => setShowCardModal(true)}
                >
                    <View style={style.paymentLeft}>
                        <Image
                            source={images.masterCard}
                            style={style.paymentIcon}
                            resizeMode="contain"
                        />
                        <View>
                            <Text style={style.paymentLabel}>Debit Card</Text>
                            <Text style={style.paymentNumber}>
                                {cardData.number
                                    ? `•••• •••• •••• ${cardData.number.slice(-4)}`
                                    : '*** **** **** 4567'}
                            </Text>
                        </View>
                    </View>
                    <Image
                        source={images.downArrow}
                        style={style.downArrow}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                <Text style={style.title}>Charges</Text>
                <View style={style.chargeContainer}>
                    <View style={style.chargeRow}>
                        <Text style={style.chargeLabel}>Service Fee/Day</Text>
                        <Text style={style.chargeValue}>$500.00</Text>
                    </View>
                    <View style={style.chargeRow}>
                        <Text style={style.chargeLabel}>Tax</Text>
                        <Text style={style.chargeValue}>$10.00</Text>
                    </View>
                    <View style={style.chargeRow}>
                        <Text style={style.chargeLabel}>Total</Text>
                        <Text style={style.chargeValue}>$510.00</Text>
                    </View>
                </View>

                {/* 💳 Add Card Modal */}

                <CustomModal
                    isVisible={showCardModal}
                    title="Add Card Details"
                    description="Please enter the card details"
                    onClose={() => setShowCardModal(false)}
                    showConfirmButton
                    showCancelButton={true}
                    confirmText="Confirm Payment"
                    onConfirm={handleSaveCard}
                    blurBackground
                    titleStyle={style.modalTitle}
                    infoStyle={style.modalDescription}
                    style={style.modalCard}
                    iconStyle={style.modalIcon}
                    IconConatinerStyle={style.iconContainer}
                >
                    <View style={style.cardForm}>
                        <View style={style.inputGroup}>
                            <Text style={style.inputtitle}>Name on Card</Text>
                            <TextInput
                                placeholder="John Doe"
                                placeholderTextColor={COLORS.gray}
                                style={style.input}
                                value={cardData.name}
                                onChangeText={text => setCardData({ ...cardData, name: text })}
                            />
                        </View>

                        <View style={style.inputGroup}>
                            <Text style={style.inputtitle}>Card Number</Text>
                            <TextInput
                                placeholder="0000 0000 0000 0000"
                                keyboardType="numeric"
                                maxLength={19}
                                placeholderTextColor={COLORS.gray}
                                style={style.input}
                                value={cardData.number}
                                onChangeText={text =>
                                    setCardData({
                                        ...cardData,
                                        number: text
                                            .replace(/\s?/g, '')
                                            .replace(/(\d{4})/g, '$1 ')
                                            .trim(),
                                    })
                                }
                            />
                        </View>

                        <View style={style.row}>
                            <View style={[style.inputGroup, { flex: 1, marginRight: 8 }]}>
                                <Text style={style.inputtitle}>Expiry</Text>
                                <TextInput
                                    placeholder="MM/YY"
                                    keyboardType="numeric"
                                    maxLength={5}
                                    placeholderTextColor={COLORS.gray}
                                    style={style.input}
                                    value={cardData.expiry}
                                    onChangeText={text =>
                                        setCardData({
                                            ...cardData,
                                            expiry: text
                                                .replace(/^([1-9]\/|[2-9])$/g, '0$1/')
                                                .replace(/^(0[1-9]|1[0-2])$/g, '$1/')
                                                .replace(/^([0-1])([3-9])$/g, '0$1/$2')
                                                .replace(/^(\d{2})(\d{2})$/g, '$1/$2')
                                                .slice(0, 5),
                                        })
                                    }
                                />
                                <Image source={images.calender} style={style.calendarIcon} />
                            </View>

                            <View style={[style.inputGroup, { flex: 1 }]}>
                                <Text style={style.inputtitle}>CVV</Text>
                                <TextInput
                                    placeholder="000"
                                    keyboardType="numeric"
                                    maxLength={3}
                                    placeholderTextColor={COLORS.gray}
                                    style={style.input}
                                    value={cardData.cvv}
                                    onChangeText={text =>
                                        setCardData({ ...cardData, cvv: text.replace(/\D/g, '') })
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </CustomModal>

                {/* 🎉 Thank You Modal */}
                {showThanks && (
                    <Animated.View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            opacity: thanksAnim,
                            zIndex: 999,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Animated.View
                            style={[
                                style.thankYouContainer,
                                {
                                    transform: [{ scale: thanksScale }],
                                },
                            ]}
                        >
                            <Image source={images.thankYou} style={style.thankYouImg} />
                            <Text style={style.thankYou}>Thank you for booking a kitchen!</Text>
                            <Text style={style.thankYouDesc}>
                                This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate.
                            </Text>

                            <Button title="Close" style={style.button} onPress={handleThankYouClose} />
                        </Animated.View>
                    </Animated.View>
                )}
                <Button title="Confirm Payment" style={style.button} onPress={handleThanks} />
            </Container>

        </Container>
    );
};

export default Payment;
