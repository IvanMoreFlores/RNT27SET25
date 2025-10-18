import { Image, View } from 'react-native';
import Layout from '../../components/layout';
import { StorageAdapter } from '../../../application/adapters/storage';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/button';
import { StorageMMKVAdapter } from '../../../application/adapters/storageMMKV';
import TextComponent from '../../components/text';
import RadioButton from '../../components/radio-button';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../app/i18';
import useStyles from './style';
import { ThemeContext } from '../../app/provider/theme';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const styles = useStyles();
  const { setTheme: setThemeContext } = useContext(ThemeContext);
  const [language, setLanguage] = useState<string>(
    StorageMMKVAdapter.getItem('language') || 'en',
  );
  const [theme, setTheme] = useState<string>(
    StorageMMKVAdapter.getItem('theme') || 'light',
  );

  const handleLanguageChange = (value: 'en' | 'es') => {
    if (value === 'en') {
      StorageMMKVAdapter.setItem('language', 'en');
      i18n.changeLanguage('en');
    } else {
      StorageMMKVAdapter.setItem('language', 'es');
      i18n.changeLanguage('es');
    }
    setLanguage(value);
  };

  const handleThemeChange = (value: 'light' | 'dark') => {
    if (value === 'light') {
      console.log('light');
      StorageMMKVAdapter.setItem('theme', 'light');
      setTheme('light');
      setThemeContext('light');
    } else {
      console.log('dark');
      StorageMMKVAdapter.setItem('theme', 'dark');
      setTheme('dark');
      setThemeContext('dark');
    }
  };

  useEffect(() => {
    const value = StorageMMKVAdapter.getItem('language');
    if (value !== undefined) {
      setLanguage(value);
    }
    const valueTheme = StorageMMKVAdapter.getItem('theme');
    if (valueTheme !== undefined) {
      setTheme(valueTheme);
    }
  }, []);

  return (
    <Layout>
      <View style={styles.container}>
        <TextComponent variant="primary" fontWeight="bold">
          {t('profile.title')}
        </TextComponent>
        <View style={styles.infoContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: StorageMMKVAdapter.getItem('image') }}
              style={styles.image}
            />
          </View>
          <View>
            <TextComponent variant="senary" fontWeight="bold">
              {t('profile.content.name')}
            </TextComponent>
            <TextComponent variant="septenary">
              {StorageMMKVAdapter.getItem('username')}
            </TextComponent>
          </View>
          <View>
            <TextComponent variant="senary" fontWeight="bold">
              {t('profile.content.email')}
            </TextComponent>
            <TextComponent variant="septenary">
              {StorageMMKVAdapter.getItem('email')}
            </TextComponent>
          </View>
          <View>
            <TextComponent variant="senary" fontWeight="bold">
              {t('profile.content.language')}
            </TextComponent>
            <RadioButton
              label={t('profile.language.english')}
              value={language}
              onChange={() => handleLanguageChange('en')}
              selected={StorageMMKVAdapter.getItem('language') === 'en'}
            />
            <RadioButton
              label={t('profile.language.spanish')}
              value={language}
              onChange={() => handleLanguageChange('es')}
              selected={StorageMMKVAdapter.getItem('language') === 'es'}
            />
            {/* <RadioButton
              label="System"
              value={language}
              onChange={() => handleLanguageChange('es')}
              selected={StorageMMKVAdapter.getItem('language') === 'es'}
            /> */}
          </View>
          <View>
            <TextComponent variant="senary" fontWeight="bold">
              {t('profile.theme.title')}
            </TextComponent>
            <RadioButton
              label={t('profile.theme.light')}
              value={theme}
              onChange={() => handleThemeChange('light')}
              selected={StorageMMKVAdapter.getItem('theme') === 'light'}
            />
            <RadioButton
              label={t('profile.theme.dark')}
              value={theme}
              onChange={() => handleThemeChange('dark')}
              selected={StorageMMKVAdapter.getItem('theme') === 'dark'}
            />
            {/* <RadioButton
              label="System"
              value={theme}
              onChange={() => handleThemeChange('system')}
              selected={StorageMMKVAdapter.getItem('theme') === 'system'}
            /> */}
          </View>
        </View>
        <Button
          text={t('profile.content.logout')}
          onPress={() => {
            StorageAdapter.removeItem('token');
            StorageMMKVAdapter.removeItem('username');
            navigation.navigate('Login' as never);
          }}
        >
          Logout
        </Button>
      </View>
    </Layout>
  );
};

export default ProfileScreen;
