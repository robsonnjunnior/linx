import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  Container,
  DivImage,
  Image,
  LabelTemperature,
  DivLabel,
  LabelCelsius
} from './styles'
import { Header, Footer } from './components'

function Card() {
  const { currentDay } = useSelector(({ weather }) => weather);
  const { t } = useTranslation();
  const mustRender = useCallback(currentDay !== null, [currentDay])

  return !mustRender ? null : (
    <Container data-testid="container-card-id">
      <Header />
      <DivImage>
        <Image
          alt={(t('CLOUDS'))}
          src={require('assets/cloud-background.png')}
        />
        <DivLabel>
          <LabelTemperature>{currentDay.main.temp}</LabelTemperature>
          <LabelCelsius>°ᶜ</LabelCelsius>
        </DivLabel>
      </DivImage>
      <Footer />
    </Container>
  )
}

export default Card
