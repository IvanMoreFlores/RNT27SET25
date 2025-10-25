import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { RFValue } from '../../utils/responsive';
import Logo from '../../assets/svg/logo.svg';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StorageAdapter } from '../../../application/adapters/storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await StorageAdapter.getItem('token');
      if (token) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Tab' as never }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' as never }],
        });
      }
    };
    checkToken();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo width={RFValue(350)} height={RFValue(200)} />
      <ActivityIndicator size="large" color="#FFF" style={styles.indicator} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
  },
  logo: {
    width: RFValue(100),
    height: RFValue(100),
  },
  indicator: {
    marginTop: RFValue(20),
    width: RFValue(100),
    height: RFValue(100),
  },
});
