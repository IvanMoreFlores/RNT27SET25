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
  const { handleRegister, handleGoBack } = useRegister();
  return (
    <Layout>
      <View style={styles.container}>
        <Logo width={RFValue(350)} height={RFValue(200)} />
        <Text>Register</Text>
        <View style={styles.form}>
          <Input label="Name" />
          <Input label="Email" value={email} />
          <Input label="Password" />
          <Button text="Register" variant="primary" onPress={handleRegister} />
          <Button text="Regresar" variant="secondary" onPress={handleGoBack} />
        </View>
      </View>
    </Layout>
  );
};

export default RegisterScreen;
