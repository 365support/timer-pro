import TimerSettingHeader from "../Layout/Header/TimerSettingHeader";
import * as style from "./index.css";

type TimerSettingProps = {
  onClose: () => void;
};

const TimerSetting = ({ onClose }: TimerSettingProps) => {
  return (
    <div className={style.container}>
      <TimerSettingHeader onClickLeft={onClose} />
    </div>
  );
};

export default TimerSetting;
