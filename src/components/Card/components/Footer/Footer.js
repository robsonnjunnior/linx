import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getHours } from 'utils'
import { Container } from './styles'
import { Item } from './components'

function Footer() {
  const { t } = useTranslation()
  const { city, currentDay: item } = useSelector(({ weather }) => weather)

  const options = useCallback(
    [
      {
        property: t('WIND'),
        description: `${item.wind.speed} m/s, ${item.wind.deg}`
      },
      {
        property: t('CLOUDINESS'),
        description: item.weather[0].description,
      },
      {
        property: t('PRESSURE'),
        description: `${item.main.pressure} hpa`
      },
      {
        property: t('HUMIDITY'),
        description: `${item.main.humidity} %`
      },
      {
        property: t('SUNRISE'),
        description: getHours(city.sunrise * 1000)
      },
      {
        property: t('SUNSET'),
        description: getHours(city.sunset * 1000)
      },
      {
        property: t('COORDINATES'),
        description: `[${city.coord.lat}, ${city.coord.lon}]`
      },
    ],
    [item, t]
  )


  return (
    <Container>
      {options.map(({ property, description }) => (
        <Item
          key={property}
          property={property}
          description={description}
        />
      ))}
    </Container>
  )
}

export default Footer
