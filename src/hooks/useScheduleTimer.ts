"use client";
import { useEffect, useState } from "react";
import { Schedule } from "@/types/Time";
import { isTimeUp } from "@/utils/isTimeUp";
import { selectAppropriateTime } from "@/utils/selectAppropriateTime";
import { calcTotalTime } from "./useScheduleTemplate";
import useTimer from "./useTimer";

type ScheduleTimer = {
  schedules: Schedule[];
  onCancel: () => void;
};

const useScheduleTimer = ({ schedules, onCancel }: ScheduleTimer) => {
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

  const totalTime = calcTotalTime(
    schedules.slice(currentSchedulesIndex, schedules.length)
  );

  const startScheduleTimer = () => {
    const canStartTimer = schedules.length > 0 && !isRunning;

    if (canStartTimer) {
      setTotalTimerIsRunning(true);
      startScheduleTimerForIndex(currentSchedulesIndex);
      startTotalTimerForSchedule();
    }
  };

  const startScheduleTimerForIndex = (index: number) => {
    const hasPausedTime = !isTimeUp(pausedTime);
    const scheduleTime = selectAppropriateTime(
      hasPausedTime,
      pausedTime,
      schedules[index].time
    );

    startTimer(scheduleTime.minutes, scheduleTime.seconds, nextScheduleTimer);
  };

  const startTotalTimerForSchedule = () => {
    const hasPausedTime = !isTimeUp(totalPausedTime);

    const totalTimerTime = selectAppropriateTime(
      hasPausedTime,
      totalPausedTime,
      totalTime
    );

    startTotalTimer(totalTimerTime.minutes, totalTimerTime.seconds);
  };

  const nextScheduleTimer = () => {
    setPausedTime({ minutes: 0, seconds: 0 });
    setTotalPausedTime({ minutes: 0, seconds: 0 });

    const hasNextSchedule = currentSchedulesIndex < schedules.length - 1;
    if (hasNextSchedule) {
      setCurrentSchedulesIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (totalTimerIsRunning) {
      startScheduleTimerForIndex(currentSchedulesIndex);
      startTotalTimerForSchedule();
    }
  }, [currentSchedulesIndex, totalTimerIsRunning]);

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
    const hasPausedTime = !isTimeUp(pausedTime);

    if (totalTimerIsRunning) {
      return currentTime;
    }
    if (hasPausedTime) {
      return pausedTime;
    }
    return schedules[currentSchedulesIndex].time;
  };

  const displayCurrentTotalTime = () => {
    const hasPausedTime = !isTimeUp(totalPausedTime);

    if (totalTimerIsRunning) {
      return currentTotalTime;
    }
    if (hasPausedTime) {
      return totalPausedTime;
    }
    return totalTime;
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
