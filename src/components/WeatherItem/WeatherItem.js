import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import DateToWeekday from 'hooks/DateToWeekday'
import { Types } from 'store/ducks/weather'

import {
  Container,
  Block,
  FlexBetween,
  LabelWeekday,
  LabelClouds,
  LabelWind,
  LabelTemperature,
  ImageIcon
} from './styles'

function WeatherItem({ weather }) {
  const { weekday } = DateToWeekday(weather.dt_txt);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const icon = weather.weather[0].main.toLowerCase();

  const onClick = () => {
    dispatch({ type: Types.SET_CURRENT_DAY, payload: weather })
  }

  return (
    <Container onClick={onClick} data-testid="container-id">
      <Block>
        <FlexBetween>
          <ImageIcon
            alt={t('WEATHER_ICON')}
            src={require(`assets/${icon}.png`)}
          />
          <LabelWeekday>{weekday}</LabelWeekday>
        </FlexBetween>
        <Block>
          <LabelTemperature>
            {weather.main.temp} °C
          </LabelTemperature>
        </Block>
        <Block>
          <LabelWind>
            {weather.wind.speed} m/s
          </LabelWind>
        </Block>
        <Block>
          <LabelClouds>
            {t('CLOUDS')}: {weather.clouds.all}%
          </LabelClouds>
        </Block>
      </Block>
    </Container>
  )
}

export default WeatherItem
