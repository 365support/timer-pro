import CircleButton from "@/components/Common/Button/CircleButton/CircleButton";
import {
  Pause,
  Play,
  PlayNext,
  SpeakerMute,
  SpeakerWave,
} from "@/components/Common/Icons";
import * as styles from "./index.css";

type Props = {
  isRunning: boolean;
  isMuted: boolean;
  toggleMute: () => void;
  hasNext: boolean;
  onStart: () => void;
  onStop: () => void;
  onCancel: () => void;
  onNext: () => void;
};

const ControlPanel = ({
  isRunning,
  isMuted,
  toggleMute,
  hasNext,
  onStart,
  onStop,
  onCancel,
  onNext,
}: Props) => {
  return (
    <div className={styles.panelContainerStyle}>
      <CircleButton className={styles.sideIconStyle} onClick={toggleMute}>
        {isMuted ? (
          <SpeakerMute width="20" height="20" color="#999" />
        ) : (
          <SpeakerWave width="20" height="20" color="#999" />
        )}
      </CircleButton>

      {isRunning ? (
        <CircleButton className={styles.centerIconStyle} onClick={onStop}>
          <Pause width="24" height="24" color="#8778F0" />
        </CircleButton>
      ) : (
        <CircleButton className={styles.playIconStyle} onClick={onStart}>
          <Play width="18" height="25" color="#8778F0" />
        </CircleButton>
      )}

      <CircleButton
        disabled={!hasNext}
        className={styles.sideIconStyle}
        onClick={onNext}
      >
        <PlayNext width="17" height="17" color="#999" />
      </CircleButton>
    </div>
  );
};

export default ControlPanel;
