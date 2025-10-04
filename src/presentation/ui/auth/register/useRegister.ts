import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const useRegister = () => {
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
  };
};

export default useRegister;
