import TimerSettingHeader from "../Layout/Header/TimerSettingHeader";
import * as styles from "./index.css";

type TimerSettingProps = {
  onClose: () => void;
};

const TimerSetting = ({ onClose }: TimerSettingProps) => {
  return (
    <div className={styles.containerStyle}>
      <TimerSettingHeader onClickLeft={onClose} />
    </div>
  );
};

export default TimerSetting;
