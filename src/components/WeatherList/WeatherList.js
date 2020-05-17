import React, { useCallback } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Container, Label } from './styles';
import WeatherItem from 'components/WeatherItem';

function WeatherList() {
  const { t } = useTranslation();
  const { list } = useSelector(({ weather }) => weather);
  const mustShow = useCallback(list.length > 0, [list]);

  return !mustShow ? null : (
    <Container>
      <Label>
        {t('FORECAST_FOR_THE_WEEK')}:
      </Label>
      <Row>
        {list.map(weather => (
          <Col xs={3} key={weather.dt}>
            <WeatherItem weather={weather} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default WeatherList
