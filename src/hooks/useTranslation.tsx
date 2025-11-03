import { useTranslation as useI18nTranslation } from 'react-i18next';
import { isLanguageRTL, changeAppLanguage, Locale } from 'lib/language/languageUtils';
import { useAppSelector } from 'store/hooks';

export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();
  const currentLocale = useAppSelector(state => state?.App?.appLanguage) as Locale;
  const isLangRTL = isLanguageRTL(currentLocale);

  const onChangeLanguage = async (language: Locale) => {
    await changeAppLanguage(language);
  };

  return { t, i18n, isLangRTL, changeLanguage: onChangeLanguage, currentLocale };
};
