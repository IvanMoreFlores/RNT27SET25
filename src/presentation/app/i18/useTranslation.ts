import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();

  const changeLanguage = (language: 'es' | 'en') => {
    i18n.changeLanguage(language);
  };

  const getCurrentLanguage = () => {
    return i18n.language;
  };

  const isSpanish = () => {
    return i18n.language === 'es';
  };

  const isEnglish = () => {
    return i18n.language === 'en';
  };

  return {
    t,
    changeLanguage,
    getCurrentLanguage,
    isSpanish,
    isEnglish,
    currentLanguage: i18n.language,
  };
};
