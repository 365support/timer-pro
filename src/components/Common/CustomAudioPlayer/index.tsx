import { useEffect, useRef } from "react";

type Props = {
  src: string;
  muted: boolean;
  play: boolean;
  loop: boolean;
  volume?: number;
};

const CustomAudioPlayer = ({
  muted = false,
  volume = 0.3,
  src,
  play,
  loop,
}: Props) => {
  const audioElementRef = useRef<HTMLAudioElement>(new Audio(src));

  useEffect(() => {
    const audioElement = audioElementRef.current;

    audioElement.src = src;
    audioElement.loop = loop;
    audioElement.muted = muted;
    audioElement.volume = volume;

    const controlAudio = async () => {
      if (play) {
        audioElement.currentTime = 0;
        try {
          await audioElement.play();
        } catch (error) {
          console.error("Audio play failed", error);
        }
      } else {
        audioElement.pause();
      }
    };

    audioElement.load();
    controlAudio();

    return () => {
      audioElement.pause();
      audioElement.src = "";
    };
  }, [src, play, loop, muted, volume]);

  return null;
};

export default CustomAudioPlayer;
