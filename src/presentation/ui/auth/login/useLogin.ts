import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { AuthUseCases } from '../../../../application/use-cases/auth/auth.use-cases';
import { AuthInfrastructure } from '../../../../infrastructure/auth';
import { Alert } from 'react-native';
import { useForm } from '../../../hooks/useForm';

interface LoginForm {
  username: string;
  password: string;
  country: {
    code: string;
    name: string;
  };
  gender: number;
  isAgree: boolean;
}

const useLogin = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  const { onChange, form, isValid } = useForm<LoginForm>(
    {
      username: '',
      password: '',
      country: {
        code: '',
        name: '',
      },
      gender: 0,
      isAgree: false,
    },
    ['username', 'password'],
    { minLength: { username: 3, password: 6 } },
  );

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
    onChange,
    isValid,
    t,
    i18n,
  };
};

export default useLogin;
