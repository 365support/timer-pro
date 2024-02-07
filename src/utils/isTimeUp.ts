import { Time } from "@/types/Time";

export const isTimeUp = (time: Time) => {
  return time.minutes === 0 && time.seconds === 0;
};
