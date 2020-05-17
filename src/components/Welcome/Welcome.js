import React from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from './styles'

function Welcome() {
  const { t } = useTranslation();

  return (
    <Header>
      {t('BE_WELCOME')}
    </Header>
  )
}

export default Welcome
