import React from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar } from 'components'
import { Toolbar, Image } from './styles'

function Sidebar() {
  const { t } = useTranslation()

  return (
    <Toolbar>
      <div>
        <img
          alt={t('LOGO')}
          src={require('assets/logo.png')}
        />
      </div>
      <div>
        <Image
          alt={t('HOME')}
          src={require('assets/home.png')}
        />
      </div>
      <div>
        <Calendar />
      </div>
    </Toolbar>
  )
}

export default Sidebar
