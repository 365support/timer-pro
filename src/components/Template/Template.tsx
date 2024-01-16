"use client";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

import { DEFAULT_TEMPLATE } from "@/constants/constants";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Template as TemplateType, Time } from "@/types/Time";
import * as style from "./Template.css";

const Template = () => {
  const router = useRouter();

  const [template, setTemplate] = useLocalStorage<TemplateType>(
    "template",
    DEFAULT_TEMPLATE
  );

  const isTimeObject = (value: Time | number): value is Time => {
    if (!value || typeof value !== "object") {
      return false;
    }

    const requiredKeys: Array<keyof Time> = ["minutes", "seconds"];
    return requiredKeys.every((key) => key in value);
  };

  const handleTemplateUpdate = (
    field: keyof TemplateType,
    event: ChangeEvent<HTMLInputElement>,
    subField?: keyof Time
  ) => {
    const value = parseInt(event.target.value, 10) || 0;

    setTemplate((prevState: TemplateType) => {
      if (isTimeObject(prevState[field]) && subField) {
        return {
          ...prevState,
          [field]: { ...(prevState[field] as Time), [subField]: value },
        };
      }

      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const handleStartButtonClick = () => {
    router.push("/timer");
  };

  return (
    <div className={style.container}>
      {/* 운동 시간 입력 필드 */}
      <div className={style.innerContainer}>
        <label htmlFor="work-minutes">운동</label>
        <input
          type="number"
          id="work-minutes"
          onChange={(event) => handleTemplateUpdate("work", event, "minutes")}
          defaultValue={template.work.minutes}
        />
        <div> 분</div>
        <input
          type="number"
          id="work-seconds"
          onChange={(event) => handleTemplateUpdate("work", event, "seconds")}
          defaultValue={template.work.seconds}
        />
        <div> 초</div>
      </div>

      {/* 휴식 시간 입력 필드 */}
      <div className={style.innerContainer}>
        <label htmlFor="rest-minutes">휴식</label>
        <input
          type="number"
          id="rest-minutes"
          onChange={(event) => handleTemplateUpdate("rest", event, "minutes")}
          defaultValue={template.rest.minutes}
        />
        <div> 분</div>

        <input
          type="number"
          id="rest-seconds"
          onChange={(event) => handleTemplateUpdate("rest", event, "seconds")}
          defaultValue={template.rest.seconds}
        />
        <div> 초</div>
      </div>

      {/* 라운드 및 사이클 입력 필드 */}
      <div className={style.innerContainer}>
        <label htmlFor="round-count">라운드</label>
        <input
          type="number"
          id="round-count"
          onChange={(event) => handleTemplateUpdate("round", event)}
          defaultValue={template.round}
        />
      </div>
      <div className={style.innerContainer}>
        <label htmlFor="cycle-count">사이클</label>
        <input
          type="number"
          id="cycle-count"
          onChange={(event) => handleTemplateUpdate("cycle", event)}
          defaultValue={template.cycle}
        />
      </div>

      {/* 사이클 휴식 시간 입력 필드 */}
      <div className={style.innerContainer}>
        <div>사이클 휴식</div>
        <input
          type="number"
          id="cycle-rest-minutes"
          onChange={(event) =>
            handleTemplateUpdate("cycleRest", event, "minutes")
          }
          defaultValue={template.cycleRest.minutes}
        />
        <label htmlFor="cycle-rest-minutes">분</label>
        <input
          type="number"
          id="cycle-rest-seconds"
          onChange={(event) =>
            handleTemplateUpdate("cycleRest", event, "seconds")
          }
          defaultValue={template.cycleRest.seconds}
        />
        <label htmlFor="cycle-rest-seconds"> 초</label>
      </div>

      <button onClick={handleStartButtonClick}>시작</button>
    </div>
  );
};

export default Template;
