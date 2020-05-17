const isSameDay = (dateOne, dateTwo) => {
  const first = new Date(dateOne).toLocaleDateString();
  const second = new Date(dateTwo).toLocaleDateString();

  return Object.is(first, second);
};

export default isSameDay;
