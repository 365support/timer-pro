import { Time } from "@/types/Time";
import { convertMinutesToSeconds } from "./convertMinutesToSeconds";

type Props = {
  totalTime: Time;
  elapsedTime: Time;
};

const calculateProgressPercent = ({
  totalTime,
  elapsedTime,
}: Props): number => {
  const totalSeconds =
    convertMinutesToSeconds(totalTime.minutes) + totalTime.seconds;
  const elapsedSeconds =
    convertMinutesToSeconds(elapsedTime.minutes) + elapsedTime.seconds;

  const remainingSeconds = totalSeconds - elapsedSeconds;

  const progressPercentage = (remainingSeconds * 100) / totalSeconds;
  return progressPercentage;
};

export default calculateProgressPercent;
