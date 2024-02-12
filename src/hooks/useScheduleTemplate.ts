import { useMemo } from "react";
import { Schedule, TabataTemplate, Time } from "@/types/Time";
import useLocalStorage from "./useLocalStorage";
import { convertMinutesToSeconds } from "@/utils/convertMinutesToSeconds";
import { DEFAULT_TEMPLATE } from "@/constants/constants";
import { getTimeFromSeconds } from "./useTimer";

interface ScheduleTemplate extends TabataTemplate {
  totalWork: number;
  totalTime: Time & {
    totalSeconds: number;
  };
}

const removeLastRest = (restCount: number) => restCount - 1;

export const useScheduleTemplate = (templateName: string): ScheduleTemplate => {
  const [template] = useLocalStorage<TabataTemplate>(
    templateName,
    DEFAULT_TEMPLATE
  );

  const totalWork = template.round * template.cycle;

  const totalTime = useMemo(() => {
    const { work, rest, cycleRest, round, cycle } = template;

    const workTimeInSeconds =
      convertMinutesToSeconds(work.minutes) + work.seconds;
    const restTimeInSeconds =
      convertMinutesToSeconds(rest.minutes) + rest.seconds;
    const cycleRestTimeInSeconds =
      convertMinutesToSeconds(cycleRest.minutes) + cycleRest.seconds;

    const oneRoundTime =
      workTimeInSeconds * round + restTimeInSeconds * removeLastRest(round);
    const totalTime =
      oneRoundTime * cycle + cycleRestTimeInSeconds * removeLastRest(cycle);

    return getTimeFromSeconds(totalTime);
  }, [template]);

  return { ...template, totalWork, totalTime };
};

export const calcTotalTime = (schedules: Schedule[]) => {
  const totalSecond = schedules.reduce((totalMinutes, { time }) => {
    const { minutes, seconds } = time;
    return totalMinutes + convertMinutesToSeconds(minutes) + seconds;
  }, 0);
  return getTimeFromSeconds(totalSecond);
};
