import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './locales/en/translationEn.json' // English
import translationHi from './locales/hi/translationHi.json' // Hindi
import translationDe from './locales/de/translationDe.json' // German

const resources = {
    en: {
        translation: translationEn
    },
    de: {
        translation: translationDe
    },
    hi: {
        translation: translationHi
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
