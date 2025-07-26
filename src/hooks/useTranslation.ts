import { useLanguage } from '../context/LanguageContext';
import { translations, TranslationKeys } from '../locales/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKeys): string => {
 
    const translation = translations[language][key];

    // стандартно украинский
    if (!translation) {
      console.warn(`Missing translation for key "${key}" in language "${language}"`);
      return translations['UA'][key];
    }

    return translation;
  };

  return { t };
};