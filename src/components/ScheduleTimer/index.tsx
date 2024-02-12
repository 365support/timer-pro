"use client";
import { useRouter } from "next/navigation";
import useScheduleTimer from "@/hooks/useScheduleTimer";
import { useScheduleTemplate } from "@/hooks/useScheduleTemplate";
import { SCHEDULE_NAME } from "@/constants/constants";
import { Schedule, TemplateType } from "@/types/Time";
import calculateProgressPercent from "@/utils/calculateProgressPercent";
import CurrentSchedule from "./Component/CurrentSchedule";
import NextSchedule from "./Component/NextSchedule";
import ScheduleCounter from "./Component/ScheduleCounter";
import ControlPanel from "./Component/ControlPanel";
import RestTime from "./Component/RestTime";
import TimerHeader from "./Component/TimerHeader";
import Progressbar from "./Component/Progressbar";
import * as styles from "./index.css";

interface Props {
  schedules: Schedule[];
  TemplateType: TemplateType;
}

// TODO: 운동 끝났을 때 모달창 띄우고 메인페이지 이동
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
    <div className={styles.mainContainer}>
      <TimerHeader
        onClickLeft={navigateToMainPage}
        isLock={false}
        scheduleName={SCHEDULE_NAME[currentSchedule.name]}
      />

      <div className={styles.innerContainer}>
        <ScheduleCounter
          currentSchedule={currentSchedule}
          totalWork={totalWork}
          cycle={cycle}
        />

        <div className={styles.progressStyle}>
          <Progressbar
            percent={calculateProgressPercent({
              totalTime: currentSchedule.time,
              elapsedTime: currentTime,
            })}
          >
            <div className={styles.displayFlex}>
              {currentSchedule && (
                <CurrentSchedule
                  name={SCHEDULE_NAME[currentSchedule.name]}
                  time={currentTime}
                />
              )}
              <RestTime time={currentTotalTime} />
            </div>
          </Progressbar>
          {nextSchedule && (
            <NextSchedule name={SCHEDULE_NAME[nextSchedule.name]} />
          )}
        </div>

        <ControlPanel
          isRunning={totalTimerIsRunning}
          onStart={startScheduleTimer}
          onStop={stopScheduleTimer}
          onCancel={cancelScheduleTimer}
          onNext={nextScheduleTimer}
          hasNext={!!nextSchedule}
        />
      </div>
    </div>
  );
};
export default ScheduleTimer;
