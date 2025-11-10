import { KitchenCards } from '../screens/types';
import { images } from '../constant';
import NavigationStrings from '../navigation/NavigationStrings';

export const kitchenCardData: KitchenCards[] = [
  {
    id: '1',
    title: 'Shared Station',
    image: images.kitchenA,
    price: 500,
  },
  {
    id: '2',
    title: 'Dedicated Station',
    image: images.kitchenA,
    price: 500,
  },
  {
    id: '3',
    title: 'Dedicated Station',
    image: images.kitchenA,
    price: 500,
  },
  {
    id: '4',
    title: 'Dedicated Station',
    image: images.kitchenA,
    price: 500,
  },
  {
    id: '5',
    title: 'Dedicated Station',
    image: images.kitchenA,
    price: 500,
  },
];
export const notifications = [
  {
    id: '1',
    title: 'Please Check In',
    message: 'Your room is ready for check-in...',
    time: '14:00',
    date: 'today',
    unread: true,
  },
  {
    id: '2',
    title: 'Your Booking Expires Soon',
    message: 'Your booking will expire in 2 hours. Extend if needed...',
    time: '12:30',
    date: 'today',
    unread: true,
  },
  {
    id: '3',
    title: 'Please Check Out...',
    message: 'Check-out time is at 12:00 PM....',
    time: '11:15',
    date: 'today',
    unread: false,
  },
  {
    id: '4',
    title: 'Kitchen Request Approved',
    message: 'Your special dietary request has been approved by kitchen...',
    time: '10:45',
    date: 'today',
    unread: false,
  },
  {
    id: '5',
    title: 'Booking Approved',
    message: 'Your booking request has been confirmed and approved...',
    time: '09:20',
    date: 'today',
    unread: false,
  },
  {
    id: '6',
    title: 'Room Service Completed',
    message: 'Your room service request has been completed successfully...',
    time: '20:15',
    date: 'yesterday',
    unread: false,
  },
  {
    id: '7',
    title: 'Payment Received',
    message: 'Your payment for extended stay has been processed...',
    time: '18:30',
    date: 'yesterday',
    unread: false,
  },
  {
    id: '8',
    title: 'Maintenance Scheduled',
    message: 'Room maintenance scheduled for tomorrow at 11 AM...',
    time: '16:45',
    date: 'yesterday',
    unread: false,
  },
  {
    id: '9',
    title: 'Welcome Amenity Delivered',
    message: 'Your welcome fruit basket has been delivered to your room...',
    time: '15:20',
    date: 'yesterday',
    unread: false,
  },
  {
    id: '10',
    title: 'Spa Booking Reminder',
    message: 'Your spa appointment is in 30 minutes at the wellness center...',
    time: '13:10',
    date: 'yesterday',
    unread: false,
  },
  {
    id: '11',
    title: 'Restaurant Reservation Confirmed',
    message: 'Your table at Sunset Restaurant is reserved for 8 PM...',
    time: '11:05',
    date: 'yesterday',
    unread: false,
  },
  {
    id: '12',
    title: 'Late Check-out Approved',
    message: 'Your request for late check-out until 2 PM has been approved...',
    time: '09:45',
    date: 'yesterday',
    unread: false,
  },
];
export const menuItems = [
  {
    id: 1,
    label: 'Personal Information',
    icon: images.personal,
  },
  {
    id: 2,
    label: 'Change Password',
    icon: images.password,
    navigateTo: NavigationStrings.CHANGE_PASSWORD,
  },
  {
    id: 3,
    label: 'My Document',
    icon: images.documents,
  },
  {
    id: 4,
    label: 'My Booking',
    icon: images.bookings,
    navigateTo: NavigationStrings.MY_BOOKINGS,
  },
  {
    id: 5,
    label: 'Push Notifications',
    type: 'switch',
    icon: images.bell,
  },
  {
    id: 6,
    label: 'Terms & Conditions',
    icon: images.terms,
  },
  {
    id: 7,
    label: 'Help & Support',
    icon: images.support,
  },
];

// export const homeItems: HomeItem[] = [
// {
//     id: '1',
//     image: images.camera,
//     title: 'Camera',
// },
// {
//     id: '2',
//     image: images.closet,
//     title: 'My Closet',
// },
// {
//     id: '3',
//     image: images.case,
//     title: 'Packing',
// },
// {
//     id: '4',
//     image: images.calendar,
//     title: 'Calendar',
// },
// {
//     id: '5',
//     image: images.charity,
//     title: 'Donate/Sell',
// },
// {
//     id: '6',
//     image: images.heart,
//     title: 'My Favorites',
// },
// {
//     id: '7',
//     image: images.share,
//     title: 'Share',
// },
// {
//     id: '8',
//     image: images.bulb,
//     title: 'Suggestions',
// },
// ];

export const BookedKitchens: KitchenCards[] = [
  {
    id: '1',
    title: 'Shared Station',
    image: images.kitchenA,
    price: 500,
  },
  {
    id: '2',
    title: 'Dedicated Station',
    image: images.kitchenA,
    price: 500,
  },
  {
    id: '3',
    title: 'Dedicated Station',
    image: images.kitchenA,
    price: 500,
  },
];
