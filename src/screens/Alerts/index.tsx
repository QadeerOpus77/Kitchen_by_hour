import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { BackHeader, Container, Header } from '../../Components';
import { images } from '../../constant';
import styles from './style';
import { notifications } from '../../config';



const NotificationScreen = () => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'unread' | 'read'>(
    'all',
  );

  const filteredNotifications = notifications.filter(item => {
    if (selectedTab === 'all') return true;
    if (selectedTab === 'unread') return item.unread;
    if (selectedTab === 'read') return !item.unread;
    return true;
  });

  return (
    <Container style={styles.container}>
      <BackHeader title="Alerts" titleColor='black' backgroundColor='white' />
      <View style={styles.tabRow}>
        {['all', 'unread', 'read'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.tabButtonActive,
            ]}
            onPress={() => setSelectedTab(tab as any)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.tabTextActive,
              ]}
            >
              {tab === 'read'
                ? 'Mark as read'
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ===== Notification List ===== */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Today</Text>

        {filteredNotifications
          .filter(item => item.date === 'today')
          .map(item => (
            <View
              key={item.id}
              style={[
                styles.notificationCard,
                item.unread && styles.unreadCard,
              ]}
            >
              <View style={styles.iconContainer}>
                <Image source={images.notification} style={styles.icon} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationMessage}>{item.message}</Text>
              </View>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          ))}

        <Text style={styles.sectionTitle}>Yesterday</Text>

        {filteredNotifications
          .filter(item => item.date === 'yesterday')
          .map(item => (
            <View key={item.id} style={styles.notificationCard}>
              <View style={styles.iconContainer}>
                <Image source={images.notification} style={styles.icon} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationMessage}>{item.message}</Text>
              </View>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          ))}
      </ScrollView>
    </Container>
  );
};

export default NotificationScreen;
