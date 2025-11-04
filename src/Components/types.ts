import React, { ReactNode } from 'react';
import {
  ViewStyle,
  LayoutChangeEvent,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ImageSourcePropType,
  StatusBarStyle,
} from 'react-native';

export type CustomStatusBarProps = {
  backgroundColor: string;
  barStyle?: StatusBarStyle;
};

export interface ContainerProps {
  children: ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
  isPadding?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
  needsKeyboardAvoiding?: boolean;
}

export interface LogoContainerProps {
  back?: boolean;
}

export interface FormInputProps {
  style?: StyleProp<ViewStyle>;
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  width: any;
  height: any;
  backgroundColor?: string;
  phoneNumber?: boolean;
  isDarkMode?: boolean;
  settingEmail?: boolean;
  onBlur?: (e: any) => void;
  error?: string | false;
  borderColor?: boolean;
  trip?: boolean;
  editable?: boolean;
  rightIcon?: any;
  onRightIconPress?: () => void;
}

export interface GradientButtonProps extends TouchableOpacityProps {
  title: string;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  gradientStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabledColors?: string[];
  camera?: any;
  gallery?: boolean;
  cancel?: boolean;
}

export interface CustomDrawerContentProps {
  navigation: any;
}

export interface PhoneNumberInputProps {
  values: {
    phone_number: string;
    [key: string]: any;
  };
  setFieldValue: (field: string, value: string) => void;
  width?: Number;
  height?: Number;
  background?: String;
  isDarkMode?: boolean;
  settingEmail?: boolean;
  error?: string | false;
  touched?: any;
  handleBlur?: (field: string) => void;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  image: any;
}

export interface BackHeaderProps {
  title?: string;
  tintColor?: string;
  background?: boolean;
  outfit?: boolean;
  share?: boolean;
  showDownload?: boolean;
  titleColor?: string;
}

export interface DropdownComponentProps {
  data: Array<{ label: string; value: string | number }>;
  label?: string;
  placeholder?: string;
  value: any;
  onChange: (item: any) => void;
  background?: string;
  bool?: boolean;
  isDarkMode?: boolean;
  margin?: boolean;
}

export type TabType<T extends string> = {
  id: T;
  label: string;
};

export interface ToggleButtonProps<T extends string> {
  activeTab: T;
  onPress: (tab: T) => void;
  tabs: TabType<T>[];
  containerStyle?: object;
  buttonStyle?: object;
  activeButtonStyle?: object;
  textStyle?: object;
  activeTextStyle?: object;
  appointment?: boolean;
}

export interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  showFilter?: boolean;
  onFilterPress?: () => void;
  searchIconSource: ImageSourcePropType;
  filterIconSource: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

interface DayItem {
  id: string;
  day: string;
  date: string;
  empty?: boolean;
  fullDate?: Date;
}

export interface CalendarHeaderProps {
  monthName: string;
  weekDays: DayItem[];
  selectedDay: string | null;
  onDaySelect: (id: string) => void;
  onMonthPress: () => void;
}

type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  type: ToastType;
  text1: string;
  text2?: string;
  visibilityTime?: number;
  autoHide?: boolean;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  image: any;
  delete: boolean;
}

export interface FamilyMemberCardProps {
  member: FamilyMember;
  onDelete?: (id: string) => void;
}
export interface HeaderProps {
  title: string;
  subtitle: string;
  onAvatarPress?: () => void;
  avatarSource?: any; // changed type to any to support local images
  onSearchPress?: () => void;
  showSearch?: boolean;
  onMorePress?: () => void;
  showMore?: boolean;
}
export interface KitchenCards {
  id: string;
  title: string;
  image: any;
}
export interface KitchenCardsProps {
  onSelect?: (id: string) => void;
}
