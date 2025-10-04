import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

interface LoginForm {
  email: string;
  password: string;
}

const useLogin = () => {
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('form', form);
  };

  const handleRegister = () => {
    navigation.navigate('Register', { email: form.email });
  };

  return {
    handleLogin,
    handleRegister,
    form,
    setForm,
  };
};

export default useLogin;
