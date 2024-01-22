import { useState, useRef, useEffect } from "react";

const getTimeFromSeconds = (secs: number) => {
  const totalSeconds = Math.ceil(secs);
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return {
    totalSeconds,
    seconds,
    minutes,
  };
};

const useTimer = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const startTimer = (
    minutes: number,
    seconds: number,
    onComplete?: () => void
  ) => {
    clearInterval(timerRef.current);
    setIsRunning(true);
    setTotalSeconds(minutes * 60 + seconds);

    timerRef.current = setInterval(() => {
      setTotalSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(timerRef.current);
          if (onComplete) {
            onComplete();
          }
          setIsRunning(false);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTotalSeconds(0);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const formattedTime = getTimeFromSeconds(totalSeconds);

  return {
    currentTime: formattedTime,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default useTimer;