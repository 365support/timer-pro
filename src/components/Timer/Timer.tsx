"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Schedule } from "@/types/Time";
import useTimer from "@/hooks/useTimer";

interface Props {
  schedule: Schedule[];
}

const Timer = ({ schedule }: Props) => {
  const [currentSchedules, setCurrentSchedules] = useState<Schedule[]>([
    ...schedule,
  ]);

  const { currentTime, isRunning, startTimer, stopTimer, resetTimer } =
    useTimer();
  const router = useRouter();

  const navigateToMainPage = () => {
    router.push("/");
  };

  const handleNextSchedule = () => {
    setCurrentSchedules((prevSchedule) => {
      const updatedSchedules = prevSchedule.slice(1);

      const isLastSchedule = updatedSchedules.length === 0;
      if (!isLastSchedule) {
        const { minutes, seconds } = updatedSchedules[0].time;
        startTimer(minutes, seconds, handleNextSchedule);
      }

      return updatedSchedules;
    });
  };

  const handleStartButtonClick = () => {
    const canStartTimer = currentSchedules.length > 0 && !isRunning;

    if (canStartTimer) {
      const { minutes, seconds } = currentSchedules[0].time;
      startTimer(minutes, seconds, handleNextSchedule);
    }
  };

  const handleStopButtonClick = () => stopTimer();

  const handleCancelButtonClick = () => {
    resetTimer();
    navigateToMainPage();
  };

  const currentSchedule = currentSchedules[0];
  const nextSchedule = currentSchedules.length > 1 ? currentSchedules[1] : null;

  return (
    <div>
      {currentSchedule && (
        <>
          <div>현재: {currentSchedule.name}</div>
          <div>
            남은 시간:{" "}
            {isRunning ? currentTime.minutes : currentSchedule.time.minutes}분{" "}
            {isRunning ? currentTime.seconds : currentSchedule.time.seconds}초
          </div>
        </>
      )}
      {nextSchedule && (
        <div>
          <div>다음: {nextSchedule.name}</div>
          <div>
            남은 시간: {nextSchedule.time.minutes}분 {nextSchedule.time.seconds}
            초
          </div>
        </div>
      )}

      <button onClick={handleStartButtonClick}>시작</button>
      <button onClick={handleStopButtonClick}>중지</button>
      <button onClick={handleCancelButtonClick}>취소</button>
      {nextSchedule && <button onClick={handleNextSchedule}>다음</button>}
    </div>
  );
};
export default Timer;
