import { useEffect, useState } from "react";
import { createScheduleFromTemplate } from "@/utils/createScheduleFromTemplate";
import { Schedule, Template } from "@/types/Time";
import { DEFAULT_TEMPLATE } from "@/constants/constants";
import useLocalStorage from "./useLocalStorage";

const useSchedule = (templateName: string): Schedule[] => {
  const [template, setTemplate] = useLocalStorage<Template>(
    templateName,
    DEFAULT_TEMPLATE
  );
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
