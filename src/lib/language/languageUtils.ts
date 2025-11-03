import i18n from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, I18nManager } from 'react-native';
import { store } from 'store/store';
import { setAppLanguage } from 'store/slices/appSettings';
// import RNRestart from 'react-native-restart';

export const LANGUAGES = {
  ENGLISH: 'en',
  ARABIC: 'ar',
  HINDI: 'hi',
} as const;

export type Locale = (typeof LANGUAGES)[keyof typeof LANGUAGES]; // "en" | "ar" | "hi"
const RTL_LANGS: Locale[] = [LANGUAGES.ARABIC];

export const isLanguageRTL = (langCode: Locale) => RTL_LANGS.includes(langCode);

export const changeAppLanguage = async (langCode: Locale) => {
  try {
    await i18n.changeLanguage(langCode);
    await AsyncStorage.setItem('app_language', langCode);

    const isRTL = isLanguageRTL(langCode);
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.forceRTL(isRTL);
      // RNRestart.Restart();
    }

    // ✅ Update redux language immediately
    store.dispatch(setAppLanguage(langCode));
  } catch (err) {
    console.error('Language switch failed:', err);
  }
};

/**
 * Loads and applies saved app language from AsyncStorage.
 * Should be called before rendering app screens (e.g., in App.tsx).
 */
export const loadAppLanguage = async (): Promise<{ locale: Locale; isRTL: boolean }> => {
  try {
    const stored = (await AsyncStorage.getItem('app_language')) as Locale | null;
    const lang = stored || LANGUAGES.ENGLISH;
    const isRTL = isLanguageRTL(lang);
    await changeAppLanguage(lang);
    return { locale: lang, isRTL };
  } catch (err) {
    console.warn('Error loading language:', err);
    return { locale: LANGUAGES.ENGLISH, isRTL: false };
  }
};

export const resetAppLanguage = () => {
  Alert.alert(
    'Reset Language',
    'Are you sure you want to reset the app language to default (English)?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Reset',
        style: 'destructive',
        onPress: async () => {
          try {
            await AsyncStorage.removeItem('app_language');
            Alert.alert('Done', 'Language reset successfully!');
            // Optional: restart the app to reinitialize language settings
            // RNRestart?.Restart?.();
          } catch (err) {
            console.error('Error resetting language:', err);
          }
        },
      },
    ],
    { cancelable: true },
  );
};
