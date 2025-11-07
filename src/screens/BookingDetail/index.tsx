import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { BackHeader, Button, Container, KitchenCards } from '../../Components'
import style from './style'
import { kitchenCardData } from '../../config'
import { images } from '../../constant'
import { navigate } from '../../navigation/Stack/NavigationRef'
import NavigationStrings from '../../navigation/NavigationStrings'
import { RootStackParamList } from '../../navigation/types/RootStackParamList'


const BookingDetail = () => {
    return (
        <Container style={style.container}>
            <BackHeader title="Booking Detail" tintColor="black" titleColor="#0D284A" />
            <Container style={style.subContainer}>
                <View>
                    <KitchenCards data={[kitchenCardData[0]]} showPrice />
                </View>
                <View style={style.addressContainer}>
                    <Image style={style.mapIcon} source={images.mapIcon} />
                    <Text style={style.address}>
                        1234 Elmwood Drive, Springfield, IL 62704, USA
                    </Text>
                </View>
                <Text style={style.title}>Time & Date</Text>
                <View style={style.timeDate}>
                    <View style={style.row}>
                        <Text style={style.option}>Date</Text>
                        <Text style={style.value}>10 Aug - 20 Aug, 2025</Text>
                    </View>
                    <View style={style.row}>
                        <Text style={style.option}>Time</Text>
                        <Text style={style.value}>09:00 AM - 9:00 PM</Text>
                    </View>
                </View>
                <Text style={style.title}>Attach Document</Text>
                <View style={style.uploadBoxWrapper}>
                    <TouchableOpacity
                        style={style.uploadBox}
                        activeOpacity={0.8}

                    >
                        <Image style={style.addIcon} source={images.upload} />
                        <Text style={style.uploadtxt}>Tap to choose files</Text>
                    </TouchableOpacity>
                </View>

                <Button title='Continue' style={style.button} onPress={() =>
                    navigate({
                        name: NavigationStrings.PAYMENT as keyof RootStackParamList,
                    })}></Button>
            </Container>
        </Container>
    )
}

export default BookingDetail