import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState<RegisterForm>({
    name: '',
    email: '',
    password: '',
  });
  const navigation = useNavigation();

  const handleRegister = () => {
    console.log('handleRegister');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    handleRegister,
    handleGoBack,
    form,
    setForm,
    t,
    i18n,
  };
};

export default useRegister;
