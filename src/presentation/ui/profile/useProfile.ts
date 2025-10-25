import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import useStyles from './style';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../app/provider/theme';
import { StorageMMKVAdapter } from '../../../application/adapters/storageMMKV';
import i18n from '../../app/i18';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import { useCameraDevice } from 'react-native-vision-camera';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const useProfile = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const styles = useStyles();
  const { setTheme: setThemeContext } = useContext(ThemeContext);
  const [permissions, setPermissions] = useState<boolean>(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const device = useCameraDevice('back');
  const [permissionsReadMediaImages, setPermissionsReadMediaImages] =
    useState<boolean>(false);
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

  const handlePermissions = async () => {
    // const result = await request(PERMISSIONS.ANDROID.CAMERA);
    // console.log(result);
    // if (result === 'granted') {
    //   setPermissions(true);
    // } else {
    //   setPermissions(false);
    // }
    const result = await requestMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    ]);
    console.log(result);
    if (result[PERMISSIONS.ANDROID.CAMERA] === 'granted') {
      setPermissions(true);
    } else {
      setPermissions(false);
    }
    if (result[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] === 'granted') {
      setPermissionsReadMediaImages(true);
    } else {
      setPermissionsReadMediaImages(false);
    }
  };

  const handleTakePhoto = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
      includeBase64: true,
    });
    console.log(result);
    if (result.assets?.[0]?.uri) {
      const base64 = result.assets?.[0]?.base64;
      console.log(base64);
      setPhoto(base64 ?? null);
    }
  };

  const handleReadMediaImages = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: true,
    });
    console.log(result);
    if (result.assets?.[0]?.uri) {
      const base64 = result.assets?.[0]?.base64;
      console.log(base64);
      setPhoto(base64 ?? null);
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

  return {
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
    photo,
    handleTakePhoto,
    handleReadMediaImages,
  };
};

export default useProfile;
