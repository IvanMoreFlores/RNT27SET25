import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { AuthUseCases } from '../../../../application/use-cases/auth/auth.use-cases';
import { AuthInfrastructure } from '../../../../infrastructure/auth';
import { Alert } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface LoginForm {
  username: string;
  password: string;
}

const useLogin = () => {
  const { t, i18n } = useTranslation();
  const formik = useFormik<LoginForm>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Username es requerido'),
      password: Yup.string().required('Password es requerido'),
    }),
    onSubmit: () => handleLogin(),
  });

  const navigation = useNavigation();

  const handleLogin = async () => {
    const authUseCases = new AuthUseCases(new AuthInfrastructure());
    const { status, error } = await authUseCases.login(
      formik.values.username,
      formik.values.password,
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
    formik,
    t,
    i18n,
  };
};

export default useLogin;
