import { useEffect, useState } from "react";
import { useScheduleTemplate } from "@/hooks/useScheduleTemplate";
import { Schedule, TemplateType } from "@/types/Time";

type Props = {
  currentSchedule: Schedule;
  TemplateType?: TemplateType;
};

const ScheduleCounter = ({
  currentSchedule,
  TemplateType = "tabata",
}: Props) => {
  const { cycle, totalWork } = useScheduleTemplate(TemplateType);

  const [currentWork, setCurrentWork] = useState(0);
  const [currentCycle, setCurrentCycle] = useState(1);

  useEffect(() => {
    const updateScheduleCounter = () => {
      if (!currentSchedule) return;
      if (currentSchedule.name === "work") {
        setCurrentWork((prev) => prev + 1);
      }
      if (currentSchedule.name === "cycleRest") {
        setCurrentCycle((prev) => prev + 1);
      }
    };
    updateScheduleCounter();
  }, [currentSchedule]);

  return (
    <>
      <div>
        <div>운동</div>
        <div>
          {currentWork} / {totalWork}
        </div>
      </div>
      <div>
        <div>사이클</div>
        <div>
          {currentCycle} / {cycle}
        </div>
      </div>
    </>
  );
};

export default ScheduleCounter;
