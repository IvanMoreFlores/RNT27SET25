import { Text, View } from 'react-native';
import Layout from '../../../components/layout';
import styles from './styles';
import useLogin from './useLogin';
import Button from '../../../components/button';
import Input from '../../../components/input';

const LoginScreen = () => {
  const { handleLogin } = useLogin();

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Bienvenido de nuevo</Text>
        <View style={styles.form}>
          <Input label="Email" placeholder="Email" />
          <Input label="Password" placeholder="Password" />
          <Button text="Login" variant="primary" />
          <Button text="Register" variant="secondary" onPress={handleLogin} />
        </View>
      </View>
    </Layout>
  );
};

export default LoginScreen;
