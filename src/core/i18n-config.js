import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from 'i18n/en'
import ptBR from 'i18n/pt-BR'

i18n
  .use(initReactI18next)
  .init({
    resources: { en, 'pt-BR': ptBR },
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    }
  })
