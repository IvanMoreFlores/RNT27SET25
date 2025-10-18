import { Text, View } from 'react-native';
import Layout from '../../components/layout';
import { StorageAdapter } from '../../../application/adapters/storage';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/button';
import { StorageMMKVAdapter } from '../../../application/adapters/storageMMKV';
import styles from './style';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <View style={styles.container}>
        <Text>Home {StorageMMKVAdapter.getItem('username')}</Text>
        <Button
          text="Logout"
          onPress={() => {
            StorageAdapter.removeItem('token');
            StorageMMKVAdapter.removeItem('username');
            navigation.navigate('Login' as never);
          }}
        >
          Logout
        </Button>
      </View>
    </Layout>
  );
};

export default HomeScreen;
