"use client";
import { useState } from "react";
import { Schedule } from "@/types/Time";
import useTimer from "./useTimer";

type ScheduleTimer = {
  schedules: Schedule[];
  onCancel: () => void;
};

const useScheduleTimer = ({ schedules, onCancel }: ScheduleTimer) => {
  const [currentSchedulesIndex, setCurrentSchedulesIndex] = useState(0);
  const [scheduleTimerIsRunning, setScheduleTimerIsRunning] = useState(false);

  const { currentTime, isRunning, startTimer, stopTimer, resetTimer } =
    useTimer();

  const startScheduleTimerForIndex = (index: number) => {
    const { minutes, seconds } = schedules[index].time;
    startTimer(minutes, seconds, nextScheduleTimer);
  };

  const startScheduleTimer = () => {
    const canStartTimer = schedules.length > 0 && !isRunning;

    if (canStartTimer) {
      setScheduleTimerIsRunning(true);
      startScheduleTimerForIndex(currentSchedulesIndex);
    }
  };

  const nextScheduleTimer = () => {
    if (isRunning) return;
    setCurrentSchedulesIndex((prevIndex) => {
      const updatedIndex = prevIndex + 1;
      if (updatedIndex < schedules.length) {
        startScheduleTimerForIndex(updatedIndex);
      } else {
        setScheduleTimerIsRunning(false);
      }
      return updatedIndex;
    });
  };

  const stopScheduleTimer = () => {
    stopTimer();
    setScheduleTimerIsRunning(false);
  };

  const cancelScheduleTimer = () => {
    resetTimer();
    setScheduleTimerIsRunning(false);
    onCancel();
  };

  const currentSchedule = schedules[currentSchedulesIndex];
  const nextSchedule =
    currentSchedulesIndex < schedules.length - 1
      ? schedules[currentSchedulesIndex + 1]
      : null;

  return {
    currentSchedulesIndex,
    currentSchedule,
    nextSchedule,
    currentTime,
    isRunning,
    startScheduleTimer,
    nextScheduleTimer,
    cancelScheduleTimer,
    stopScheduleTimer,
    scheduleTimerIsRunning,
  };
};

export default useScheduleTimer;
