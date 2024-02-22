import { useCallback, useEffect, useState } from "react";
import { Time } from "@/types/Time";

type Props = {
  totalTimerIsRunning: boolean;
  currentTime: Time;
};

export const useScheduleAudio = ({
  totalTimerIsRunning,
  currentTime,
}: Props) => {
  const [audioSource, setAudioSource] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!totalTimerIsRunning) return;

    const isCountdown =
      currentTime.minutes === 0 &&
      currentTime.seconds <= 3 &&
      currentTime.seconds > 0;

    const isNextSchedule =
      currentTime.minutes === 0 && currentTime.seconds === 0;

    if (isCountdown) {
      setAudioSource("/sounds/go.mp3");
      setIsPlaying(true);
      setIsLooping(true);
    }

    if (isNextSchedule) {
      setAudioSource("/sounds/ready.mp3");
      setIsPlaying(true);
      setIsLooping(false);
    }

    return () => {
      setIsPlaying(false);
    };
  }, [currentTime, totalTimerIsRunning]);

  return { audioSource, isPlaying, isLooping, isMuted, toggleMute };
};
