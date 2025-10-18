import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './es.json';
import en from './en.json';
import { StorageMMKVAdapter } from '../../../application/adapters/storageMMKV';

const resources = {
  es: {
    translation: es,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: StorageMMKVAdapter.getItem('language') || 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v4',
});

export default i18n;
