import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../ui/home/HomeScreen';
import CategoryScreen from '../../ui/category/CategoryScreen';
import FavoriteScreen from '../../ui/favorite/FavoriteScreen';
import ProfileScreen from '../../ui/profile/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

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
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Category" component={CategoryScreen} />
        <Tabs.Screen name="Favorite" component={FavoriteScreen} />
        <Tabs.Screen name="Profile" component={ProfileScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
