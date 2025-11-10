import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, ImageBackground, FlatList, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BackHeader, Button, Container } from '../../Components';
import style from './style';
import { COLORS, images } from '../../constant';

type AttendanceRecord = {
  dateKey: string;     // e.g., 2025-11-10 (local date)
  checkIn?: string;    // e.g., "9:02 AM"
  checkOut?: string;   // e.g., "6:11 PM"
};

const STORAGE_KEY = 'ATTENDANCE_HISTORY_V1';

const CheckIn = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [currentDate] = useState<Date>(new Date());
  const [history, setHistory] = useState<AttendanceRecord[]>([]);

  // ---------- helpers ----------
  const formatDay = (date: Date) =>
    date.toLocaleDateString('en-US', { weekday: 'long' });

  const formatDate = (date: Date) =>
    date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  const localDateKey = (date: Date) => {
    const y = date.getFullYear();
    const m = `${date.getMonth() + 1}`.padStart(2, '0');
    const d = `${date.getDate()}`.padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const todayKey = useMemo(() => localDateKey(new Date()), []);

  // ---------- storage ----------
  const loadHistory = async () => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      const parsed: AttendanceRecord[] = raw ? JSON.parse(raw) : [];
      setHistory(parsed);

      // If there's an open check-in for today (checkIn set, no checkOut), set checked-in state
      const today = parsed.find((r) => r.dateKey === todayKey);
      setIsCheckedIn(!!today?.checkIn && !today?.checkOut);
    } catch (e) {
      console.warn('Failed to load attendance', e);
    }
  };

  const saveHistory = async (next: AttendanceRecord[]) => {
    try {
      setHistory(next);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (e) {
      console.warn('Failed to save attendance', e);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  // ---------- actions ----------
  const handleCheckIn = async () => {
    const now = new Date();
    const timeString = formatTime(now);
    const key = localDateKey(now);

    // If there is already a record for today and it's not checked out, overwrite the checkIn
    const existingIdx = history.findIndex((r) => r.dateKey === key);
    let next = [...history];

    if (existingIdx >= 0) {
      const existing = next[existingIdx];
      next[existingIdx] = { ...existing, dateKey: key, checkIn: timeString }; // keep existing checkout (likely undefined)
    } else {
      next.unshift({ dateKey: key, checkIn: timeString });
    }

    await saveHistory(next);
    setIsCheckedIn(true); // switch UI to "Check Out"
  };

  const handleCheckOut = async () => {
    const now = new Date();
    const timeString = formatTime(now);
    const key = localDateKey(now);

    const existingIdx = history.findIndex((r) => r.dateKey === key);
    let next = [...history];

    if (existingIdx >= 0) {
      const existing = next[existingIdx];
      next[existingIdx] = { ...existing, checkOut: timeString };
    } else {
      // Edge: somehow no check-in but user checks out — create a record anyway
      next.unshift({ dateKey: key, checkOut: timeString });
    }

    await saveHistory(next);
    setIsCheckedIn(false); // back to "Get started"
  };

  // ---------- derived ----------
  const todayRecord = history.find((r) => r.dateKey === todayKey);
  const currentCheckInTime = todayRecord?.checkIn ?? null;

  // ---------- UI ----------
  return (
    <Container style={style.container}>
      <ImageBackground
        source={images.Kitchencard}
        style={style.headerBackground}
        resizeMode="cover"
      >
        <BackHeader

          title={isCheckedIn
            ? "Check out"
            : 'Check In'}
          tintColor={COLORS.white}
          titleColor={COLORS.white}
        />
      </ImageBackground>

      {/* Current Check In / Out Section */}
      <View style={style.TimerContainer}>
        <Text style={style.counter}>
          {isCheckedIn
            ? currentCheckInTime ?? '—'
            : '00:00:00'}
        </Text>

        {!isCheckedIn ? (
          <Button
            style={style.btn}
            title="Get started"
            onPress={handleCheckIn}
          />
        ) : (
          <Button
            style={[style.btn, style.btn]}
            title="Check Out"
            onPress={handleCheckOut}
          />
        )}
      </View>

      {/* History Section */}
      <View style={style.history}>
        <Text style={style.title}>Past Check In</Text>

        {/* List of days; newest first */}
        <FlatList
          data={history}
          keyExtractor={(item) => item.dateKey}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => {
            // Build a Date from the dateKey for pretty labels
            const [y, m, d] = item.dateKey.split('-').map((n) => parseInt(n, 10));
            const cardDate = new Date(y, (m - 1), d);

            return (
              <View style={style.timeDate}>
                <View style={style.row}>
                  <Text style={style.option}>{formatDay(cardDate)} Time</Text>
                  <Text style={style.value}>{formatDate(cardDate)}</Text>
                </View>

                <View style={style.valueRow}>
                  <View style={style.checkInTime}>
                    <Text>{item.checkIn ?? '—'}</Text>
                    <Text style={style.value}>Check in</Text>
                  </View>

                  <View style={style.checkInTime}>
                    <Text>{item.checkOut ?? '—'}</Text>
                    <Text style={style.value}>Check out</Text>
                  </View>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={
            <Text >
              No check-ins yet. Tap “Get started” to check in.
            </Text>
          }
        />
      </View>
      <Image source={images.chat} style={style.chatIcon}></Image>
    </Container>
  );
};

export default CheckIn;
