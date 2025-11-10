import { View, Text, Image } from 'react-native'
import React from 'react'
import { BackHeader, Container, KitchenCards } from '../../Components'
import { BookedKitchens } from '../../config'
import style from './style'
import { images } from '../../constant'




const MyBookings = () => {


    return (
        <Container style={style.container}>
            <BackHeader title="My Bookings" tintColor="black" titleColor="#0D284A" />
            <Container style={style.subContainer}>
                <View>
                    <KitchenCards data={BookedKitchens} showPrice
                    // onPress={() => navigate({
                    //     name: NavigationStrings.BOOKED_STACK as keyof RootStackParamList,
                    //     params: {
                    //         screen: NavigationStrings.CHECKIN
                    //     }
                    // })}
                    />
                </View>
            </Container>
        </Container>
    )
}

export default MyBookings