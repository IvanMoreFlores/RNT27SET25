import { StyleSheet, View } from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  IconCategory,
  IconFavorite,
  IconHome,
  IconProfile,
} from '../../assets/icon';
import TextComponent from '../../components/text';

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.tabBar} key={state.index + 'tabBar'}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icon = () => {
          switch (route.name) {
            case 'Home':
              return <IconHome fill={isFocused ? '#262626' : '#FFFFFF'} />;
            case 'Profile':
              return <IconProfile fill={isFocused ? '#262626' : '#FFFFFF'} />;
            case 'Category':
              return <IconCategory fill={isFocused ? '#262626' : '#FFFFFF'} />;
            case 'Favorite':
              return <IconFavorite fill={isFocused ? '#262626' : '#FFFFFF'} />;
          }
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.button, isFocused ? styles.ViewSelected : {}]}
          >
            {icon()}
            {isFocused && (
              <TextComponent
                variant="denary"
                fontWeight="medium"
                style={styles.iconText}
              >
                {route.name}
              </TextComponent>
            )}
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#262626',
    padding: 14,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    margin: 24,
    borderRadius: 70,
    overflow: 'hidden',
  },
  icon: {
    flexDirection: 'row',
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    gap: 6,
  },
  iconText: {
    fontFamily: 'FormulaCondensed-Regular',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#262626',
  },
  ViewSelected: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 70,
  },
});

export default MyTabBar;
