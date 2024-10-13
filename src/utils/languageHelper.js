import i18n from "@/assets/i18n/i18n"

export function setLocale(lang) {
  i18n.global.locale = lang // Set the global locale
  localStorage.setItem('language', lang) // Persist the language selection
}
