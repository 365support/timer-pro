"use client";
import { useRouter } from "next/navigation";
import useScheduleTimer from "@/hooks/useScheduleTimer";
import { Schedule, TemplateType } from "@/types/Time";
import CurrentSchedule from "./Component/CurrentSchedule";
import NextSchedule from "./Component/NextSchedule";
import ScheduleCounter from "./Component/ScheduleCounter";
import ControlPanel from "./Component/ControlPanel";

interface Props {
  schedules: Schedule[];
  TemplateType: TemplateType;
}

const ScheduleTimer = ({ schedules, TemplateType }: Props) => {
  const router = useRouter();
  const navigateToMainPage = () => {
    router.push("/");
  };

  const {
    currentSchedule,
    nextSchedule,
    currentTime,
    isRunning,
    startScheduleTimer,
    nextScheduleTimer,
    cancelScheduleTimer,
    stopScheduleTimer,
  } = useScheduleTimer({ schedules, onCancel: navigateToMainPage });

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

      {nextSchedule && <NextSchedule name={nextSchedule.name} />}

      <ControlPanel
        isRunning={isRunning}
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
