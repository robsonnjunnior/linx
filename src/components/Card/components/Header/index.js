import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getDayMount } from 'utils';
import DateToWeekday from 'hooks/DateToWeekday';

import {
  Container,
  Block,
  LabelDay,
  LabelCity,
  ImageIcon
} from './styles';

const Header = () => {
  const { t } = useTranslation();
  const { currentDay: item, city } = useSelector(({ weather }) => weather);
  const { weekday } = DateToWeekday(item.dt_txt);

  const today = useCallback(getDayMount(new Date()), [item]);
  const weatherDate = useCallback(getDayMount(item.dt_txt), [item]);

  const icon = item && item.weather[0].main.toLowerCase();
  const isToday = Object.is(today, weatherDate);
  const Day = isToday ? t('TODAY') : weekday

  return (
    <Container>
      <Block>
        <LabelDay>{Day}</LabelDay>
        <LabelCity>{city.name}</LabelCity>
      </Block>
      <ImageIcon
        alt={t('WEATHER_ICON')}
        src={require(`assets/${icon}-purple.png`)}
      />
    </Container>
  );
};

export default Header;
