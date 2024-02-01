"use client";
import { useState } from "react";
import { Schedule, Time } from "@/types/Time";
import useTimer from "./useTimer";
import { isTimeNonZero } from "@/utils/isTimeNonZero";
import { selectAppropriateTime } from "@/utils/selectAppropriateTime";
import { checkTimerStatus } from "@/utils/checkTimerStatus";
import { adjustTimeToPositive } from "@/utils/adjustTimeToPositive";

type ScheduleTimer = {
  schedules: Schedule[];
  totalTime: Time;
  onCancel: () => void;
};

const useScheduleTimer = ({
  schedules,
  totalTime,
  onCancel,
}: ScheduleTimer) => {
  const { currentTime, isRunning, startTimer, stopTimer, resetTimer } =
    useTimer();

  const {
    currentTime: currentTotalTime,
    startTimer: startTotalTimer,
    stopTimer: stopTotalTimer,
    resetTimer: resetTotalTimer,
  } = useTimer();

  const [currentSchedulesIndex, setCurrentSchedulesIndex] = useState(0);
  const [totalTimerIsRunning, setTotalTimerIsRunning] = useState(false);

  const [pausedTime, setPausedTime] = useState({ minutes: 0, seconds: 0 });
  const [totalPausedTime, setTotalPausedTime] = useState({
    minutes: 0,
    seconds: 0,
  });

  const startScheduleTimerForIndex = (index: number) => {
    const isPausedTimeZero = isTimeNonZero(pausedTime);
    const scheduleTime = selectAppropriateTime(
      isPausedTimeZero,
      pausedTime,
      schedules[index].time
    );

    startTimer(scheduleTime.minutes, scheduleTime.seconds, nextScheduleTimer);
  };

  const startScheduleTimer = () => {
    const canStartTimer = schedules.length > 0 && !isRunning;

    const isPausedTimeZero = isTimeNonZero(totalPausedTime);
    const totalTimerTime = selectAppropriateTime(
      isPausedTimeZero,
      totalPausedTime,
      totalTime
    );

    if (canStartTimer) {
      setTotalTimerIsRunning(true);
      startScheduleTimerForIndex(currentSchedulesIndex);
      startTotalTimer(totalTimerTime.minutes, totalTimerTime.seconds);
    }
  };

  const updateTimerForNextSchedule = (
    prevIndex: number,
    updatedIndex: number
  ) => {
    const currentScheduleTime = schedules[prevIndex].time;
    totalTime.minutes -= currentScheduleTime.minutes;
    totalTime.seconds -= currentScheduleTime.seconds;

    adjustTimeToPositive(totalTime);

    const nextScheduleTime = schedules[updatedIndex].time;
    startTimer(
      nextScheduleTime.minutes,
      nextScheduleTime.seconds,
      nextScheduleTimer
    );

    startTotalTimer(totalTime.minutes, totalTime.seconds);
  };

  const nextScheduleTimer = () => {
    setCurrentSchedulesIndex((prevIndex) => {
      const updatedIndex = prevIndex + 1;
      const hasNextSchedule = updatedIndex < schedules.length;
      if (hasNextSchedule) {
        startScheduleTimerForIndex(updatedIndex);
        setPausedTime({ minutes: 0, seconds: 0 });

        updateTimerForNextSchedule(prevIndex, updatedIndex);
      } else {
        setTotalTimerIsRunning(false);
      }
      return updatedIndex;
    });
  };

  const stopScheduleTimer = () => {
    stopTimer();
    setPausedTime(currentTime);

    stopTotalTimer();
    setTotalPausedTime(currentTotalTime);

    setTotalTimerIsRunning(false);
  };

  const cancelScheduleTimer = () => {
    resetTimer();
    resetTotalTimer();

    setTotalTimerIsRunning(false);

    onCancel();
  };

  const displayCurrentTime = () => {
    const status = checkTimerStatus(totalTimerIsRunning, currentSchedulesIndex);
    if (status === "notStarted") {
      return schedules[0].time;
    } else if (status === "running") {
      return currentTime;
    }
    return pausedTime;
  };

  const displayCurrentTotalTime = () => {
    const status = checkTimerStatus(totalTimerIsRunning, currentSchedulesIndex);
    if (status === "notStarted") {
      return totalTime;
    } else if (status === "running") {
      return currentTotalTime;
    }
    return totalPausedTime;
  };

  const currentSchedule = schedules[currentSchedulesIndex];
  const hasNextSchedule = currentSchedulesIndex < schedules.length - 1;
  const nextSchedule = hasNextSchedule && schedules[currentSchedulesIndex + 1];

  return {
    currentSchedulesIndex,
    currentSchedule,
    nextSchedule,
    currentTime: displayCurrentTime(),
    isRunning,
    startScheduleTimer,
    nextScheduleTimer,
    cancelScheduleTimer,
    stopScheduleTimer,
    currentTotalTime: displayCurrentTotalTime(),

    totalTimerIsRunning,
  };
};

export default useScheduleTimer;
