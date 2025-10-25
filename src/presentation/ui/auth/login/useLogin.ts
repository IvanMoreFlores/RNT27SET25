import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { AuthUseCases } from '../../../../application/use-cases/auth/auth.use-cases';
import { AuthInfrastructure } from '../../../../infrastructure/auth';
import { Alert } from 'react-native';
import { useForm } from '../../../hooks/useForm';
import { StorageAdapter } from '../../../../application/adapters/storage';
import { StorageMMKVAdapter } from '../../../../application/adapters/storageMMKV';

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
    const data = await authUseCases.login(form.username, form.password);
    if ('status' in data && data.status === 200) {
      if ('response' in data) {
        await StorageAdapter.setItem('token', data.response.accessToken);
        StorageMMKVAdapter.setItem('username', data.response.username);
        StorageMMKVAdapter.setItem('email', data.response.email);
        StorageMMKVAdapter.setItem('image', data.response.image);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Tab' as never }],
        });
      }
    } else {
      if ('error' in data) {
        Alert.alert(
          'Error',
          data.error?.message || 'An unexpected error occurred',
        );
      }
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
