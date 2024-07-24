import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './infraestructure/locales/en/header.json'
import esTranslation from './infraestructure/locales/es/header.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      }
    },
    lng: 'es', 
    fallbackLng: 'es', 
    interpolation: {
      escapeValue: false 
    }
  })

export default i18n