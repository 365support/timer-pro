"use client";
import { useRouter } from "next/navigation";
import { TabataTemplate, Time } from "@/types/Time";
import { DEFAULT_TEMPLATE } from "@/constants/constants";
import { parseToInteger } from "@/utils/parseToInteger";
import useLocalStorage from "@/hooks/useLocalStorage";
import * as style from "./Template.css";

const TabataTemplateEditor = () => {
  const router = useRouter();

  const [template, setTemplate] = useLocalStorage<TabataTemplate>(
    "tabata",
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
    <div className={style.container}>
      <div className={style.innerContainer}>
        <label htmlFor="work-minutes">운동</label>
        <input
          type="number"
          id="work-minutes"
          onChange={(event) =>
            handleTemplateUpdate(
              "work",
              parseToInteger(event.target.value),
              "minutes"
            )
          }
          defaultValue={template.work.minutes}
        />
        <div> 분</div>
        <input
          type="number"
          id="work-seconds"
          onChange={(event) =>
            handleTemplateUpdate(
              "work",
              parseToInteger(event.target.value),
              "seconds"
            )
          }
          defaultValue={template.work.seconds}
        />
        <div> 초</div>
      </div>

      <div className={style.innerContainer}>
        <label htmlFor="rest-minutes">휴식</label>
        <input
          type="number"
          id="rest-minutes"
          onChange={(event) =>
            handleTemplateUpdate(
              "rest",
              parseToInteger(event.target.value),
              "minutes"
            )
          }
          defaultValue={template.rest.minutes}
        />
        <div> 분</div>

        <input
          type="number"
          id="rest-seconds"
          onChange={(event) =>
            handleTemplateUpdate(
              "rest",
              parseToInteger(event.target.value),
              "seconds"
            )
          }
          defaultValue={template.rest.seconds}
        />
        <div> 초</div>
      </div>

      <div className={style.innerContainer}>
        <label htmlFor="round-count">라운드</label>
        <input
          type="number"
          id="round-count"
          onChange={(event) =>
            handleTemplateUpdate("round", parseToInteger(event.target.value))
          }
          defaultValue={template.round}
        />
      </div>
      <div className={style.innerContainer}>
        <label htmlFor="cycle-count">사이클</label>
        <input
          type="number"
          id="cycle-count"
          onChange={(event) =>
            handleTemplateUpdate("cycle", parseToInteger(event.target.value))
          }
          defaultValue={template.cycle}
        />
      </div>

      <div className={style.innerContainer}>
        <div>사이클 휴식</div>
        <input
          type="number"
          id="cycle-rest-minutes"
          onChange={(event) =>
            handleTemplateUpdate(
              "cycleRest",
              parseToInteger(event.target.value),
              "minutes"
            )
          }
          defaultValue={template.cycleRest.minutes}
        />
        <label htmlFor="cycle-rest-minutes">분</label>
        <input
          type="number"
          id="cycle-rest-seconds"
          onChange={(event) =>
            handleTemplateUpdate(
              "cycleRest",
              parseToInteger(event.target.value),
              "seconds"
            )
          }
          defaultValue={template.cycleRest.seconds}
        />
        <label htmlFor="cycle-rest-seconds"> 초</label>
      </div>

      <button onClick={navigateToTimerPage}>시작</button>
    </div>
  );
};

export default TabataTemplateEditor;
