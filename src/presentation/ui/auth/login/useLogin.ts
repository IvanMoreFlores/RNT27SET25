import { useNavigation } from '@react-navigation/native';

const useLogin = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Register' as never);
  };

  return {
    handleLogin,
  };
};

export default useLogin;
