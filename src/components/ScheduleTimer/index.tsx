"use client";
import useScheduleTimer from "@/hooks/useScheduleTimer";
import { Schedule, TemplateType } from "@/types/Time";
import CurrentSchedule from "./Component/CurrentSchedule";
import NextSchedule from "./Component/NextSchedule";
import ScheduleController from "./Component/ScheduleController";
import ScheduleCounter from "./Component/ScheduleCounter";
import { useEffect } from "react";

interface Props {
  schedules: Schedule[];
  TemplateType: TemplateType;
}

const ScheduleTimer = ({ schedules, TemplateType }: Props) => {
  const {
    currentSchedule,
    nextSchedule,
    currentTime,
    isRunning,
    startScheduleTimer,
    nextScheduleTimer,
    cancelScheduleTimer,
    stopScheduleTimer,
  } = useScheduleTimer(schedules);

  return (
    <div>
      <ScheduleCounter
        TemplateType={TemplateType}
        currentSchedule={currentSchedule}
      />

      {currentSchedule && (
        <CurrentSchedule
          name={currentSchedule.name}
          time={isRunning ? currentTime : currentSchedule.time}
        />
      )}

      {nextSchedule && (
        <NextSchedule name={nextSchedule.name} time={nextSchedule.time} />
      )}

      <ScheduleController
        isRunning={isRunning}
        startSchedule={startScheduleTimer}
        cancelSchedule={cancelScheduleTimer}
        nextSchedule={nextScheduleTimer}
        stopSchedule={stopScheduleTimer}
        hasNextSchedule={!!nextSchedule}
      />
    </div>
  );
};
export default ScheduleTimer;
