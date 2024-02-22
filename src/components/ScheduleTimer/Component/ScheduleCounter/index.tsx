import { useEffect, useState } from "react";
import { Schedule } from "@/types/Time";
import Card from "@/components/Common/Card/Card";
import { Babel, Cycle } from "@/components/Common/Icons";
import { theme } from "@/styles/theme.css";
import * as styles from "./index.css";

type Props = {
  currentSchedule: Schedule;
  totalWork: number;
  cycle: number;
};

const ScheduleCounter = ({ currentSchedule, totalWork, cycle }: Props) => {
  const [currentWork, setCurrentWork] = useState(-1);
  const [currentCycle, setCurrentCycle] = useState(1);

  useEffect(() => {
    const updateScheduleCounter = () => {
      if (!currentSchedule) return;
      if (currentSchedule.name === "work") {
        setCurrentWork((prev) => prev + 1);
      }
      if (currentSchedule.name === "cycleRest") {
        setCurrentCycle((prev) => prev + 1);
      }
    };
    updateScheduleCounter();
  }, [currentSchedule]);

  return (
    <div className={styles.cardContainerStyle}>
      <Card className={styles.workCardStyle}>
        <div className={styles.displayFlexStyle}>
          <Card.Icon className={styles.workIconStyle}>
            <Babel width="24" height="24" color={theme.color.White100} />
          </Card.Icon>
          <Card.SubTitle>운동</Card.SubTitle>
        </div>
        <Card.Title as="title" size="md">
          {currentWork} / {totalWork}
        </Card.Title>
      </Card>

      <Card className={styles.cycleCardStyle}>
        <div className={styles.displayFlexStyle}>
          <Card.Icon className={styles.cycleIconStyle}>
            <Cycle width="24" height="24" color={theme.color.White100} />
          </Card.Icon>
          <Card.SubTitle>사이클</Card.SubTitle>
        </div>
        <Card.Title as="title" size="md">
          {currentCycle} / {cycle}
        </Card.Title>
      </Card>
    </div>
  );
};

export default ScheduleCounter;
