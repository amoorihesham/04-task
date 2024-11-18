import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ar from './locales/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        form: en,
      },
      ar: {
        form: ar,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    ns: ['form'], // Specify namespaces
    defaultNS: 'form',
  });

export default i18n;
