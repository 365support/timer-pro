import { useEffect, useState } from "react";
import { createScheduleFromTemplate } from "@/utils/createScheduleFromTemplate";
import useLocalStorage from "./useLocalStorage";
import { Schedule, Template } from "@/types/Time";

const useSchedule = (templateName: string): Schedule[] => {
  const [template, setTemplate] = useLocalStorage<Template>(templateName);
  const [schedule, setSchedule] = useState<Schedule[]>([]);

  useEffect(() => {
    if (template) {
      const result = createScheduleFromTemplate(template);
      setSchedule(result);
    }
  }, [template]);

  return schedule;
};

export default useSchedule;
