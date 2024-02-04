"use client";
import { useRouter } from "next/navigation";
import useScheduleTimer from "@/hooks/useScheduleTimer";
import { useScheduleTemplate } from "@/hooks/useScheduleTemplate";
import { Schedule, TemplateType } from "@/types/Time";
import CurrentSchedule from "./Component/CurrentSchedule";
import NextSchedule from "./Component/NextSchedule";
import ScheduleCounter from "./Component/ScheduleCounter";
import ControlPanel from "./Component/ControlPanel";
import RestTime from "./Component/RestTime";

interface Props {
  schedules: Schedule[];
  TemplateType: TemplateType;
}

const ScheduleTimer = ({ schedules, TemplateType }: Props) => {
  const { cycle, totalWork } = useScheduleTemplate(TemplateType);

  const router = useRouter();
  const navigateToMainPage = () => {
    router.push("/");
  };

  const {
    currentSchedule,
    nextSchedule,
    currentTime,
    startScheduleTimer,
    nextScheduleTimer,
    cancelScheduleTimer,
    stopScheduleTimer,
    currentTotalTime,
    totalTimerIsRunning,
  } = useScheduleTimer({
    schedules,
    onCancel: navigateToMainPage,
  });

  return (
    <div>
      <ScheduleCounter
        currentSchedule={currentSchedule}
        totalWork={totalWork}
        cycle={cycle}
      />
      {currentSchedule && (
        <CurrentSchedule name={currentSchedule.name} time={currentTime} />
      )}
      <RestTime time={currentTotalTime} />
      {nextSchedule && <NextSchedule name={nextSchedule.name} />}
      <ControlPanel
        isRunning={totalTimerIsRunning}
        onStart={startScheduleTimer}
        onStop={stopScheduleTimer}
        onCancel={cancelScheduleTimer}
        onNext={nextScheduleTimer}
        hasNext={!!nextSchedule}
      />
    </div>
  );
};
export default ScheduleTimer;
