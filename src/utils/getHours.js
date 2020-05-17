const options = { hour: 'numeric', minute: 'numeric', hour12: true };

const getHours = value => {
  const currentDate = value ? new Date(value) : new Date();
  const hours = currentDate.toLocaleString('en-US', options);

  return hours;
};

export default getHours;
