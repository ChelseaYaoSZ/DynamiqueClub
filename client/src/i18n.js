import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en_common from "./bilingual/en/common.json";
import fr_common from "./bilingual/fr/common.json";
import en_home from "./bilingual/en/home.json";
import fr_home from "./bilingual/fr/home.json";
import en_registration from "./bilingual/en/registration.json";
import fr_registration from "./bilingual/fr/registration.json";

i18n
  // .use(HttpBackend) // loads translations from your server, e.g., /public/locales/en/translation.json
  .use(LanguageDetector) // detect language from the browser
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: {
        translation: {
          common: en_common,
          home: en_home,
          registration: en_registration
        }
      },
      fr: {
        translation: {
          common: fr_common,
          home: fr_home,
          registration: fr_registration
        }
      }
    }
  });

export default i18n;
