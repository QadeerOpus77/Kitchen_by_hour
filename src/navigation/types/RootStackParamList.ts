export type RootStackParamList = {
  SELECT_ROLE: undefined;
  SIGN_IN: undefined;
  SIGN_UP: { someParam: string };
  FORGOT_PASSWORD: undefined;
  OTP: undefined;
  NEW_PASSWORD: undefined;
  CHECKIN: undefined;
  MENU: undefined;
  ALERTS: undefined;
  BOTTOM_STACK: undefined;
  HOME_STACK: undefined;
  HOME: { id: string };
  BOOK_TOUR: { selectedDate: string };
  BOOKING_STACK: { id: string };
};

export type NavigateParams = {
  name: keyof RootStackParamList;
  params?: any;
};
export interface TabBarProps {
  routeName: string;
  selectedTab: string;
  navigate: (routeName: string) => void;
}
