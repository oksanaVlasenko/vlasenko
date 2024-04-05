import { createI18n } from 'vue-i18n'

import en from '../lang/en.json'
import uk from '../lang/uk.json'

export const i18n = createI18n({
  locale: 'uk',
  fallbackLocale: 'en',
  messages: {
    uk,
    en
  }
})