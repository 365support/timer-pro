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

  const { currentTime, isRunning, startTimer, stopTimer, resetTimer } =
    useTimer();

  const startScheduleTimerForIndex = (index: number) => {
    const { minutes, seconds } = schedules[index].time;
    startTimer(minutes, seconds, nextScheduleTimer);
  };

  const startScheduleTimer = () => {
    const canStartTimer = schedules.length > 0 && !isRunning;

    if (canStartTimer) {
      startScheduleTimerForIndex(currentSchedulesIndex);
    }
  };

  const nextScheduleTimer = () => {
    setCurrentSchedulesIndex((prevIndex) => {
      const updatedIndex = prevIndex + 1;
      if (updatedIndex < schedules.length) {
        startScheduleTimerForIndex(updatedIndex);
      }
      return updatedIndex;
    });
  };

  const cancelScheduleTimer = () => {
    resetTimer();
    onCancel();
  };

  const currentSchedule = schedules[currentSchedulesIndex];
  const nextSchedule =
    currentSchedulesIndex < schedules.length - 1
      ? schedules[currentSchedulesIndex + 1]
      : null;

  return {
    currentSchedule,
    nextSchedule,
    currentTime,
    isRunning,
    startScheduleTimer,
    nextScheduleTimer,
    cancelScheduleTimer,
    stopScheduleTimer: stopTimer,
  };
};

export default useScheduleTimer;
