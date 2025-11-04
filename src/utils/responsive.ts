import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const baseWidth = 375; // iPhone 11 Pro width

export const scaleSize = (size: number) => (width / baseWidth) * size;
