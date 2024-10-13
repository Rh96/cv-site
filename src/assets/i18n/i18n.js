import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import mk from './locales/mk.json'

// Retrieve saved language or default to 'en'
const savedLanguage = localStorage.getItem('language') || 'en'

const i18n = createI18n({
  locale: savedLanguage, // Start with the saved language
  fallbackLocale: 'en', // Fallback to English
  messages: {
    en,
    mk,
  },
})

export default i18n
