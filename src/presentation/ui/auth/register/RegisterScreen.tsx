import { Text, View } from 'react-native';
import Layout from '../../../components/layout';
import styles from './style';
import Button from '../../../components/button';
import useRegister from './useRegister';
import Input from '../../../components/input';
import Logo from '../../../assets/svg/logo.svg';
import { RFValue } from '../../../utils/responsive';

const RegisterScreen = ({
  route,
}: {
  route: { params: { email: string } };
}) => {
  const { email } = route.params;
  const { handleRegister, handleGoBack, t } = useRegister();
  return (
    <Layout>
      <View style={styles.container}>
        <Logo width={RFValue(350)} height={RFValue(200)} />
        <Text style={styles.title}>{t('auth.register.title')}</Text>
        <View style={styles.form}>
          <Input
            label={t('auth.register.name')}
            placeholder={t('auth.register.name')}
          />
          <Input
            label={t('auth.register.email')}
            placeholder={t('auth.register.email')}
            value={email}
          />
          <Input
            label={t('auth.register.password')}
            placeholder={t('auth.register.password')}
          />
          <Button
            text={t('auth.register.register')}
            variant="primary"
            onPress={handleRegister}
          />
          <Button
            text={t('auth.register.back')}
            variant="secondary"
            onPress={handleGoBack}
          />
        </View>
      </View>
    </Layout>
  );
};

export default RegisterScreen;
