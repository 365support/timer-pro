export const parseToInteger = (value: string | number, radix: number = 10) => {
  return parseInt(value.toString() ?? 0, radix) || 0;
};
