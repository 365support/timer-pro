import { Time } from "@/types/Time";

export const adjustTimeToPositive = (time: Time) => {
  if (time.seconds < 0) {
    time.minutes -= 1;
    time.seconds += 60;
  }
};
