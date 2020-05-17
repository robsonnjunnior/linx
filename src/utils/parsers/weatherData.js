import { isSameDay } from 'utils';

const weatherData = weather => {
  let data = [];

  for (const day of weather) {
    const currentDataIndex = data.length - 1;
    const currentData = data[currentDataIndex];

    if (currentData && isSameDay(day.dt_txt, currentData.dt_txt)) {
      if (new Date(day.dt_txt).getHours() === 12) {
        data[currentDataIndex] = day;
      }
      continue;
    }

    data.push(day);
  };

  return data;
};

export default weatherData;
