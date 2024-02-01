export const checkTimerStatus = (
  isRunning: boolean,
  schedulesIndex: number
) => {
  if (!isRunning && schedulesIndex === 0) {
    return "notStarted";
  } else if (isRunning) {
    return "running";
  } else {
    return "paused";
  }
};
