import { View, Text, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { BackHeader, Button, Container } from '../../Components'
import style from './style'
import { COLORS, images } from '../../constant'

const CheckIn = () => {
  const [checkInTime, setCheckInTime] = useState<string | null>(null)
  const [isCheckedIn, setIsCheckedIn] = useState(false)
  const [currentDate] = useState<Date>(new Date())

  // Format date functions
  const formatDay = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long' })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  const handleCheckIn = () => {
    const now = new Date()
    const timeString = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
    setCheckInTime(timeString)
    setIsCheckedIn(true)
  }

  return (
    <Container style={style.container}>
      <ImageBackground
        source={images.Kitchencard}
        style={style.headerBackground}
        resizeMode="cover"
      >
        <BackHeader
          title='Check In'
          tintColor={COLORS.transparent}
          titleColor={COLORS.white}

        />
      </ImageBackground>

      {/* Current Check In Section */}
      <View style={style.TimerContainer}>
        <Text style={style.counter}>{checkInTime ? checkInTime : '00:00:00'}</Text>
        <Button
          style={[style.btn, isCheckedIn && style.disabledBtn]}
          title={isCheckedIn ? 'Checked In' : 'Get started'}
          onPress={handleCheckIn}
          disabled={isCheckedIn}
        />
      </View>

      {/* Past Check In History Section */}
      <View style={style.history}>
        <Text style={style.title}>Past Check In</Text>

        {/* Time Card Section */}

        <View style={style.timeDate}>
          <View style={style.row}>
            <Text style={style.option}>{formatDay(currentDate)} Time</Text>
            <Text style={style.value}>{formatDate(currentDate)}</Text>
          </View>
          <View style={style.valueRow}>
            <View style={style.checkInTime}>
              <Text >{checkInTime ? checkInTime : '9:00 AM'}</Text>
              <Text style={style.value}>Check in</Text>
            </View>
            <View style={style.checkInTime}>
              <Text >{checkInTime ? checkInTime : '9:00 AM'}</Text>
              <Text style={style.value}>Check out</Text>
            </View>
          </View>
        </View>


      </View>
    </Container>
  )
}

export default CheckIn