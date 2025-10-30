import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './json/en.json';
import hi from './json/hi.json';
import ar from './json/ar.json';
import { LANGUAGES } from './languageUtils'; // ✅ Import runtime object, not type

const resources = {
  [LANGUAGES.ENGLISH]: { translation: en },
  [LANGUAGES.HINDI]: { translation: hi },
  [LANGUAGES.ARABIC]: { translation: ar },
};

const initializeI18Next = () => {
  i18n.use(initReactI18next).init({
    debug: false,
    resources,
    lng: LANGUAGES.ENGLISH,
    fallbackLng: LANGUAGES.ENGLISH,
    compatibilityJSON: 'v4',
    interpolation: {
      escapeValue: false,
    },
  });
};

export const init = async () => {
  initializeI18Next();
};

export default { initializeI18Next };
