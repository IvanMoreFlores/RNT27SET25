import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../ui/home/HomeScreen';
import CategoryScreen from '../../ui/category/CategoryScreen';
import FavoriteScreen from '../../ui/favorite/FavoriteScreen';
import ProfileScreen from '../../ui/profile/ProfileScreen';
import Navigator from './navigator';

const config = {
  screens: {
    Profile: 'user',
  },
};

const linking = {
  prefixes: ['https://example.com', 'example://'],
  config,
};

const MyDrawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Category: CategoryScreen,
    Favorite: FavoriteScreen,
    Profile: ProfileScreen,
  },
});

const DrawerNavigator = () => {
  return (
    <MyDrawer.Navigator>
      <MyDrawer.Screen name="Home" component={Navigator} />
      <MyDrawer.Screen name="Category" component={CategoryScreen} />
      <MyDrawer.Screen name="Favorite" component={FavoriteScreen} />
      <MyDrawer.Screen name="Profile" component={ProfileScreen} />
    </MyDrawer.Navigator>
  );
};

export default DrawerNavigator;
