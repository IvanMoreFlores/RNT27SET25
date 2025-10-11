import { Text, View } from 'react-native';
import Layout from '../../../components/layout';
import styles from './styles';
import useLogin from './useLogin';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Logo from '../../../assets/svg/logo.svg';
import { RFValue } from '../../../utils/responsive';

const LoginScreen = () => {
  const { handleLogin, handleRegister, form, setForm } = useLogin();

  return (
    <Layout>
      <View style={styles.container}>
        <Logo width={RFValue(350)} height={RFValue(200)} />
        <Text style={styles.title}>Bienvenido de nuevo</Text>
        <View style={styles.form}>
          <Input
            label="Email"
            placeholder="Email"
            value={form.email}
            onChangeText={text => setForm({ ...form, email: text })}
          />
          <Input
            label="Password"
            placeholder="Password"
            value={form.password}
            onChangeText={text => setForm({ ...form, password: text })}
          />
          <Button text="Login" variant="primary" onPress={handleLogin} />
          <Button
            text="Register"
            variant="secondary"
            onPress={handleRegister}
          />
        </View>
      </View>
    </Layout>
  );
};

export default LoginScreen;
