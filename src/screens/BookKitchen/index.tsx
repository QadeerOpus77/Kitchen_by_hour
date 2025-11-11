import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Container, Header, } from '../../Components'
import { images } from '../../constant'
import style from './style'
import { navigate } from '../../navigation/Stack/NavigationRef'
import NavigationStrings from '../../navigation/NavigationStrings'
import { RootStackParamList } from '../../navigation/types/RootStackParamList'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import BookedKitchenCard from '../../Components/BookedKitchenCard'


const BookKitchen = () => {
    // Get booked kitchens from Redux
    const bookedKitchens = useSelector((state: RootState) => state.booking.bookedKitchens);

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
                    <Button style={style.formBtn} title='Fill up Your Form'
                    ></Button>
                </View>
                <View style={style.titlerow}>
                    <Text style={style.title}>
                        My Bookings
                    </Text>
                    <TouchableOpacity onPress={() =>
                        navigate({
                            name: NavigationStrings.BOOKING_STACK as keyof RootStackParamList,
                            params: {
                                screen: NavigationStrings.MY_BOOKINGS
                            }
                        })
                    }>
                        <Text style={style.viewall}>View All</Text>
                    </TouchableOpacity>
                </View>

                {/* Show booked kitchens if they exist, otherwise show empty state */}
                {bookedKitchens.length > 0 ? (
                    <ScrollView
                        style={style.bookingsContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        {bookedKitchens.map((kitchen, index) => (
                            <BookedKitchenCard
                                key={`${kitchen.id}-${index}`}
                                title={kitchen.title}
                                price={kitchen.price}
                                duration={kitchen.duration}
                                image={kitchen.image}
                                bookedDate={kitchen.bookedDate}
                                bookedTime={kitchen.bookedTime}
                                onPress={() =>
                                    navigate({
                                        name: NavigationStrings.BOOKING_STACK as keyof RootStackParamList,
                                        params: {
                                            screen: NavigationStrings.BOOKING_DETAIL
                                        }
                                    })
                                }
                            />
                        ))}
                    </ScrollView>
                ) : (
                    <View style={style.formBox}>
                        <Text style={style.formText}>No upcoming activities.</Text>
                        <Button
                            style={style.formBtn}
                            title='Get started'
                            onPress={() =>
                                navigate({
                                    name: NavigationStrings.BOOKING_STACK as keyof RootStackParamList,
                                })
                            }
                        />
                    </View>
                )}
            </Container>
            <Image source={images.chat} style={style.chatIcon} />
        </Container>
    )
}

export default BookKitchen