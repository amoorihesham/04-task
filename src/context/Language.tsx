import React, { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

type context = { direction: string; language: string; changeLanguage: () => void };
const initialValue: context = {
  direction: 'ltr',
  language: 'en',
  changeLanguage() {},
};

const LanguageContext = createContext<context>(initialValue);

const LanguageContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [direction, setDirection] = useState('ltr');
  const [language, setLanguage] = useState('en');

  const { i18n } = useTranslation();
  const changeLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    const newDir = direction === 'ltr' ? 'rtl' : 'ltr';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    setDirection(newDir);
    document.documentElement.setAttribute('dir', newDir);
  };

  return <LanguageContext.Provider value={{ direction, language, changeLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageContextProvider;

export const useChangeLanguage = () => {
  return useContext(LanguageContext);
};
