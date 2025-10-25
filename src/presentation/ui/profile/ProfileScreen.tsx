import { Image, StyleSheet, View } from 'react-native';
import Layout from '../../components/layout';
import { StorageAdapter } from '../../../application/adapters/storage';
import Button from '../../components/button';
import { StorageMMKVAdapter } from '../../../application/adapters/storageMMKV';
import TextComponent from '../../components/text';
import RadioButton from '../../components/radio-button';
import useProfile from './useProfile';
import { Camera } from 'react-native-vision-camera';

const ProfileScreen = () => {
  const {
    navigation,
    t,
    styles,
    language,
    theme,
    handleLanguageChange,
    handleThemeChange,
    handlePermissions,
    permissions,
    permissionsReadMediaImages,
    device,
    handleTakePhoto,
    photo,
    handleReadMediaImages,
  } = useProfile();

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
            {photo && (
              <Image
                source={{ uri: `data:image/jpeg;base64,${photo}` }}
                style={styles.image}
                resizeMode="cover"
              />
            )}
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
          </View>
        </View>
        <Button
          text={t('profile.content.logout')}
          onPress={() => {
            StorageAdapter.removeItem('token');
            StorageMMKVAdapter.removeItem('username');
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' as never }],
            });
          }}
        />
        <Button
          text={t('profile.content.permissions')}
          onPress={() => handlePermissions()}
        />
        <Button
          disabled={!permissions}
          text={t('profile.content.photo')}
          onPress={handleTakePhoto}
        />
        <Button
          disabled={!permissionsReadMediaImages}
          text={t('profile.content.readMediaImages')}
          onPress={handleReadMediaImages}
        />
        {/* <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        /> */}
      </View>
    </Layout>
  );
};

export default ProfileScreen;
