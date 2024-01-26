"use client";
import ScheduleTimer from "@/components/ScheduleTimer";
import useSchedule from "@/hooks/useSchedule";

const TimerPage = () => {
  const currentSchedule = useSchedule("tabata");

  if (currentSchedule.length === 0) {
    return null;
  }

  return <ScheduleTimer TemplateType="tabata" schedules={currentSchedule} />;
};

export default TimerPage;
