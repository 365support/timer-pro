import { useScheduleTemplate } from "@/hooks/useScheduleTemplate";
import useTimer from "@/hooks/useTimer";
import { useEffect, useState } from "react";

type RestTimeProps = {
  TemplateType?: string;
  scheduleTimerIsRunning: boolean;
};

const RestTime = ({
  TemplateType = "tabata",
  scheduleTimerIsRunning,
}: RestTimeProps) => {
  const { totalTime } = useScheduleTemplate("tabata");
  const { currentTime, startTimer, stopTimer } = useTimer();

  useEffect(() => {
    if (scheduleTimerIsRunning) {
      startTimer(0, totalTime);
    } else {
      stopTimer();
    }
  }, [scheduleTimerIsRunning]);

  return (
    <div>
      전체 남은 시간
      {currentTime.minutes} : {currentTime.seconds} <br />
    </div>
  );
};

export default RestTime;
