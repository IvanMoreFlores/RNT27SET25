import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthUseCases } from '../../../../application/use-cases/auth/auth.use-cases';
import { AuthInfrastructure } from '../../../../infrastructure/auth';
import { Alert } from 'react-native';

interface LoginForm {
  username: string;
  password: string;
}

const useLogin = () => {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState<LoginForm>({
    username: '',
    password: '',
  });
  const navigation = useNavigation();

  const handleLogin = async () => {
    const authUseCases = new AuthUseCases(new AuthInfrastructure());
    const { status, error } = await authUseCases.login(
      form.username,
      form.password,
    );
    if (status === 200) {
      navigation.navigate('Home' as never);
    } else {
      Alert.alert('Error', error.message);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register', { email: form.email });
  };

  return {
    handleLogin,
    handleRegister,
    form,
    setForm,
    t,
    i18n,
  };
};

export default useLogin;
