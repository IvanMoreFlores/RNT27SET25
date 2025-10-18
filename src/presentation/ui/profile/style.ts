import { StyleSheet } from 'react-native';
import { RFValue } from '../../utils/responsive';
import { useContext } from 'react';
import { ThemeContext } from '../../app/provider/theme';

const useStyles = () => {
  const { theme } = useContext(ThemeContext);
  console.log('theme', theme);
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: RFValue(24),
      gap: RFValue(16),
      backgroundColor: theme?.colors.primary,
    },
    infoContainer: {
      gap: RFValue(16),
    },
    image: {
      width: RFValue(100),
      height: RFValue(100),
      borderRadius: RFValue(50),
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default useStyles;
