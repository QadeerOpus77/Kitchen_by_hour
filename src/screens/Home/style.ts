import { StyleSheet } from 'react-native';
import { SIZES,COLORS,FONTS } from '../../constant';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    
  },
  container: {
     flex: 1,
  },
  title: {
   ...FONTS.Medium22,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding*.5,
  },
  detailContainer: {
    flex: 1,
    paddingBottom:SIZES.height*.23
  },
  backButton: {
    color: '#007BFF',
    fontSize: 16,
    marginBottom: 12,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827',
  },
  detailText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#374151',
  },
});

