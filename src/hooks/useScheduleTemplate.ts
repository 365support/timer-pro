import { useMemo } from "react";
import { TabataTemplate } from "@/types/Time";
import useLocalStorage from "./useLocalStorage";
import { DEFAULT_TEMPLATE } from "@/constants/constants";

interface ScheduleTemplate extends TabataTemplate {
  totalWork: number;
  totalTime: number;
}

export const useScheduleTemplate = (templateName: string): ScheduleTemplate => {
  const [template, setTemplate] = useLocalStorage<TabataTemplate>(
    templateName,
    DEFAULT_TEMPLATE
  );

  const totalWork = useMemo(() => {
    return template.round * template.cycle;
  }, [template.round, template.cycle]);

  const totalTime = useMemo(() => {
    const workTimeInSeconds =
      template.work.minutes * 60 + template.work.seconds;
    const restTimeInSeconds =
      template.rest.minutes * 60 + template.rest.seconds;
    const cycleRestTimeInSeconds =
      template.cycleRest.minutes * 60 + template.cycleRest.seconds;

    return (
      totalWork * (workTimeInSeconds + restTimeInSeconds) +
      (template.cycle - 1) * cycleRestTimeInSeconds
    );
  }, [template]);

  return { ...template, totalWork, totalTime };
};
