import { Time } from "@/types/Time";

export const selectAppropriateTime = (
  condition: boolean,
  primaryTime: Time,
  secondaryTime: Time
) => {
  return condition ? primaryTime : secondaryTime;
};
