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
import Text from "@/components/Text/Text";
import CustomText from "@/components/Text/CustomText";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
    <main className={style.myStyle}>
      <div className={style.textStyle}>timer pro</div>
      <div className={style.textStyle}>03 : 20</div>
      <Card
        style={{
          width: "250px",
          backgroundColor: "#574480",
          margin: "0",
          padding: "20px",
        }}
      >
        <div className={style.displayFlex}>
          <Card.Icon>
            <Babel width="28" height="28" color="#999999" />
          </Card.Icon>
          <Card.Text>카드 텍스트</Card.Text>
        </div>
        <Card.Number>100</Card.Number>
      </Card>

      <Card
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "250px",
          backgroundColor: "#574480",
          margin: "0",
          padding: "20px",
        }}
      >
        <div className={style.displayFlex}>
          <Card.Icon>
            <Babel width="28" height="28" color="#999999" />
          </Card.Icon>
          <Card.Text>카드 텍스트</Card.Text>
        </div>
        <Card.Number>100</Card.Number>
      </Card>

      <Text as="h1" display="flex" weight="20" size={80}>
        hi
      </Text>

      <CustomText as="title" size="lg" weight="20" color={"red"}>
        CustomText
      </CustomText>

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
