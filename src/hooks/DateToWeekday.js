import { useTranslation } from 'react-i18next';

const getWeekday = day => {
  switch (day) {
    case 0: return 'PREFIX_SUNDAY';
    case 1: return 'PREFIX_MONDAY';
    case 2: return 'PREFIX_TUESDAY';
    case 3: return 'PREFIX_WEDNESDAY';
    case 4: return 'PREFIX_THURSDAY';
    case 5: return 'PREFIX_FRIDAY';
    default: return 'PREFIX_SATURDAY';
  };
};

const DateToWeekday = date => {
  const { t } = useTranslation();
  const value = new Date(date).getDay();
  const weekday = t(getWeekday(value));

  return { weekday };
};

export default DateToWeekday;
