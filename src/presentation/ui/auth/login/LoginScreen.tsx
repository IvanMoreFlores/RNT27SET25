import { Text, View } from 'react-native';
import Layout from '../../../components/layout';
import styles from './styles';
import useLogin from './useLogin';
import Button from '../../../components/button';
import Input from '../../../components/input';
import Logo from '../../../assets/svg/logo.svg';
import { RFValue } from '../../../utils/responsive';

const LoginScreen = () => {
  const { handleLogin, handleRegister, form, setForm, t } = useLogin();

  return (
    <Layout>
      <View style={styles.container}>
        <Logo width={RFValue(350)} height={RFValue(200)} />
        <Text style={styles.title}>{t('auth.login.title')}</Text>
        <View style={styles.form}>
          <Input
            label={t('auth.login.email')}
            placeholder={t('auth.login.email')}
            value={form.username}
            onChangeText={text => setForm({ ...form, username: text })}
          />
          <Input
            label={t('auth.login.password')}
            placeholder={t('auth.login.password')}
            value={form.password}
            onChangeText={text => setForm({ ...form, password: text })}
          />
          <Button
            text={t('auth.login.login')}
            variant="primary"
            onPress={handleLogin}
          />
          <Button
            text={t('auth.login.register')}
            variant="secondary"
            onPress={handleRegister}
          />
        </View>
      </View>
    </Layout>
  );
};

export default LoginScreen;
