import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../../ui/auth/login/LoginScreen';
import RegisterScreen from '../../ui/auth/register/RegisterScreen';
import HomeScreen from '../../ui/home/HomeScreen';
import SplashScreen from '../../ui/splash/SplashScreen';
import ProfileScreen from '../../ui/profile/ProfileScreen';
import TabNavigator from './tab';
import DrawerNavigator from './drawer';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
