import { Text, View } from 'react-native';
import Layout from '../../../components/layout';
import styles from './style';
import Button from '../../../components/button';
import useRegister from './useRegister';
import Input from '../../../components/input';

const RegisterScreen = () => {
  const { handleRegister, handleGoBack } = useRegister();
  return (
    <Layout>
      <View style={styles.container}>
        <Text>Register</Text>
        <View style={styles.form}>
          <Input label="Name" />
          <Input label="Email" />
          <Input label="Password" />
          <Button text="Register" variant="primary" onPress={handleRegister} />
          <Button text="Regresar" variant="secondary" onPress={handleGoBack} />
        </View>
      </View>
    </Layout>
  );
};

export default RegisterScreen;
