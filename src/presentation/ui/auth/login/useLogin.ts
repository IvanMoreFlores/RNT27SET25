import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LoginForm {
  email: string;
  password: string;
}

const useLogin = () => {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const navigation = useNavigation();

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
      }),
      credentials: 'include', // Include cookies (e.g., accessToken) in the request
    })
      .then(res => res.json())
      .then(console.log);
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
