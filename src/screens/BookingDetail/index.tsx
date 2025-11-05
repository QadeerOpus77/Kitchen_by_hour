import { View, Text } from 'react-native'
import React from 'react'
import { BackHeader, Container, KitchenCards } from '../../Components'
import style from './style'
import { kitchenCardData } from '../../config'


const BookingDetail = () => {
    return (
        <Container style={style.container}>
            <BackHeader title="Booking Detail" tintColor="black" titleColor="#0D284A" />
            <Container style={style.subContainer}>
                <KitchenCards data={[kitchenCardData[0]]} />

            </Container>
        </Container>
    )
}

export default BookingDetail