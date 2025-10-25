import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../ui/home/HomeScreen';
import CategoryScreen from '../../ui/category/CategoryScreen';
import FavoriteScreen from '../../ui/favorite/FavoriteScreen';
import ProfileScreen from '../../ui/profile/ProfileScreen';
import MyTabBar from './tabBar';
// import { NavigationContainer } from '@react-navigation/native';

const Tabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Category: CategoryScreen,
    Favorite: FavoriteScreen,
    Profile: ProfileScreen,
  },
});

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <MyTabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Category" component={CategoryScreen} />
      <Tabs.Screen name="Favorite" component={FavoriteScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
