import {
  Close,
  Cycle,
  LockClosed,
  SpeakerMute,
  LockOpen,
  PlayNext,
  Setting,
  Round,
  SpeakerWave,
  Hourglass,
  Preset,
  Pause,
  Play,
  WaterDrop,
  StopWatch,
  Babel,
} from "@/components/Icons";
import * as style from "./page.css";

export default function Home() {
  return (
    <main className={style.myStyle}>
      <div className={style.textStyle}>timer pro</div>
      <div className={style.textStyle}>03 : 20</div>

      <Close width="24" height="24" color="#999999" />
      <Cycle width="28" height="28" color="#999999" />
      <LockClosed width="28" height="28" color="#999999" />
      <LockOpen width="28" height="28" color="#999999" />
      <PlayNext width="28" height="28" color="#999999" />
      <Play width="18" height="26" color="#999999" />
      <Preset width="28" height="28" color="#999999" />
      <Round width="28" height="28" color="#999999" />
      <Setting width="28" height="28" color="#999999" />
      <SpeakerMute width="28" height="28" color="#999999" />
      <SpeakerWave width="28" height="28" color="#999999" />
      <Pause width="14" height="24" color="#999999" />
      <StopWatch width="28" height="28" color="#999999" />
      <Hourglass width="28" height="28" color="#999999" />
      <WaterDrop width="28" height="28" color="#999999" />
      <Babel width="28" height="28" color="#999999" />
    </main>
  );
}
