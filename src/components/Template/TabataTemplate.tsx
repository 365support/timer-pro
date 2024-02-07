"use client";
import { useRouter } from "next/navigation";

import { TabataTemplate, Time } from "@/types/Time";
import { useScheduleTemplate } from "@/hooks/useScheduleTemplate";
import { formatToDoubleDigit } from "@/utils/formatToDoubleDigit";
import { DEFAULT_TEMPLATE } from "@/constants/constants";
import useLocalStorage from "@/hooks/useLocalStorage";

import { theme } from "@/styles/theme.css";
import { Babel, Cycle, Pause, Play, Round, WaterDrop } from "../Icons";
import * as style from "./Template.css";
import Card from "../Card/Card";
import MainHeader from "../Layout/Header/MainHeader";
import { useBooleanState } from "@/hooks/useBooleanState";
import TimerSetting from "../TimerSetting";

const templateType = "tabata";

const TabataTemplateEditor = () => {
  const router = useRouter();
  const [isShown, onOpen, onClose] = useBooleanState();

  const [template, setTemplate] = useLocalStorage<TabataTemplate>(
    templateType,
    DEFAULT_TEMPLATE
  );
  const { totalTime } = useScheduleTemplate(templateType);

  const isTimeObject = (value: Time | number): value is Time => {
    return value !== null && typeof value !== "number";
  };

  const handleTemplateUpdate = (
    field: keyof TabataTemplate,
    value: number,
    subField?: keyof Time
  ) => {
    setTemplate((prevState: TabataTemplate) => {
      const currentField = prevState[field];
      if (isTimeObject(currentField) && subField) {
        return {
          ...prevState,
          [field]: { ...currentField, [subField]: value },
        };
      }

      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const navigateToTimerPage = () => {
    router.push("/timer");
  };

  return (
    <div className={style.templateContainer}>
      <MainHeader />
      <div className={style.cardContainer}>
        <Card className={style.totalTimeCard}>
          <Card.Title
            as="title"
            size="xlg"
            weight="bold"
            className={style.test}
            color={theme.color.White100}
          >
            {formatToDoubleDigit(totalTime.minutes)} :{" "}
            {formatToDoubleDigit(totalTime.seconds)}
          </Card.Title>
          <div className={style.totalIconShadow} />
          <Card.Icon onClick={navigateToTimerPage} className={style.totalIcon}>
            <Play width="20" height="20" color={theme.color.primary10} />
          </Card.Icon>
        </Card>

        <div className={style.flexCard}>
          <Card className={style.workCard} onClick={onOpen}>
            <div className={style.displayFlex}>
              <Card.Icon className={style.workIcon}>
                <Babel width="24" height="24" color={theme.color.White100} />
              </Card.Icon>
              <Card.SubTitle>운동</Card.SubTitle>
            </div>
            <Card.Title as="title" size="md" color={theme.color.White100}>
              {formatToDoubleDigit(template.work.minutes)} :
              {formatToDoubleDigit(template.work.seconds)}
            </Card.Title>
          </Card>

          <Card className={style.restCard}>
            <div className={style.displayFlex}>
              <Card.Icon className={style.restIcon}>
                <Pause width="16" height="14" color={theme.color.White100} />
              </Card.Icon>
              <Card.SubTitle>휴식</Card.SubTitle>
            </div>
            <Card.Title as="title" size="md" color={theme.color.White100}>
              {formatToDoubleDigit(template.rest.minutes)} :
              {formatToDoubleDigit(template.rest.seconds)}
            </Card.Title>
          </Card>
        </div>

        <Card className={style.roundCard}>
          <div className={style.displayFlex}>
            <Card.Icon className={style.roundIcon}>
              <Round width="24" height="24" color={theme.color.White100} />
            </Card.Icon>
            <Card.SubTitle>라운드(운동+휴식)</Card.SubTitle>
          </div>
          <Card.Title as="title" size="md" color={theme.color.White100}>
            {template.round}
          </Card.Title>
        </Card>

        <div className={style.flexCard}>
          <Card className={style.cycleCard}>
            <div className={style.displayFlex}>
              <Card.Icon className={style.roundIcon}>
                <Cycle width="24" height="24" color={theme.color.White100} />
              </Card.Icon>
              <Card.SubTitle>사이클</Card.SubTitle>
            </div>
            <Card.Title as="title" size="md" color={theme.color.White100}>
              {template.cycle}
            </Card.Title>
          </Card>

          <Card className={style.cycleRestCard}>
            <div className={style.displayFlex}>
              <Card.Icon className={style.cycleRestIcon}>
                <WaterDrop
                  width="24"
                  height="24"
                  color={theme.color.White100}
                />
              </Card.Icon>
              <Card.SubTitle>사이클 휴식</Card.SubTitle>
            </div>
            <Card.Title as="title" size="md" color={theme.color.White100}>
              {formatToDoubleDigit(template.cycleRest.minutes)} :
              {formatToDoubleDigit(template.cycleRest.seconds)}
            </Card.Title>
          </Card>
        </div>
      </div>
      {isShown && <TimerSetting onClose={onClose} />}
    </div>
  );
};

export default TabataTemplateEditor;
