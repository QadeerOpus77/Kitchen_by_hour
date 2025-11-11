import { View, Text, Image } from 'react-native'
import React from 'react'
import { BackHeader, Container, KitchenCards } from '../../Components'
import { kitchenCardData } from '../../config'
import style from './style'

import NavigationStrings from '../../navigation/NavigationStrings'
import { RootStackParamList } from '../../navigation/types/RootStackParamList'
import { navigate } from '../../navigation/Stack/NavigationRef'
import { images } from '../../constant'
const SelectKitchen = () => {


    return (
        <Container style={style.container}>
            <BackHeader title="Select Kitchen For Check In" tintColor="black" titleColor="#0D284A" />
            <Container style={style.subContainer}>
                <View>
                    <KitchenCards data={kitchenCardData} showPrice
                        onPress={() => navigate({
                            name: NavigationStrings.BOOKED_STACK as keyof RootStackParamList,
                            params: {
                                screen: NavigationStrings.CHECKIN
                            }
                        })}
                    />
                </View>
                <Image source={images.chat} style={style.chatIcon}></Image>
            </Container>
        </Container>
    )
}

export default SelectKitchen