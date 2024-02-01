export const formatToDoubleDigit = (time: number) => {
  return time < 10 ? `0${time}` : `${time}`;
};
