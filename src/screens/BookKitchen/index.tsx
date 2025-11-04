import { View, Text, Image } from 'react-native'
import React from 'react'
import { Button, Container, Header } from '../../Components'
import { images } from '../../constant'
import style from './style'

const BookKitchen = () => {
    return (
        <Container style={style.container}>
            <View style={style.location}>
                <Text style={style.locationTxt}>Kitchen A - 2389 Tripaldi Way</Text>
            </View>
            <Header title="Glenn Powel" subtitle="Microsoft" avatarSource={images.admin} />
            <Container scroll={true} style={style.subContainer}>
                <Text style={style.title}>
                    My Documents
                </Text>
                <View style={style.formBox}>
                    <Text style={style.formText}>Need to renew your commissary kitchen agreement for farmers market and events?</Text>
                    <Button style={style.formBtn} title='Fill up Your Form'></Button>
                </View>
                <Text style={style.title}>
                    My Bookings
                </Text>
                <View style={style.formBox}>
                    <Text style={style.formText}>No upcoming activities.</Text>
                    <Button style={style.formBtn} title='Get started'></Button>
                </View>
            </Container>
            <Image source={images.chat} style={style.chatIcon}></Image>
        </Container>
    )
}

export default BookKitchen