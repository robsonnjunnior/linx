const getDayMount = value => {
  const date = value ? new Date(value) : new Date();
  const day = date
    .getDate()
    .toString()
    .padStart(2, '0');
  const mounth = String(
    date.getMonth() + 1
  ).padStart(2, '0')


  return `${day}/${mounth}`;
};

export default getDayMount;
