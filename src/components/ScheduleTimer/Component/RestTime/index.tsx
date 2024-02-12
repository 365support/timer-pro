import { Babel } from "@/components/Common/Icons";
import { theme } from "@/styles/theme.css";
import { Time } from "@/types/Time";
import DisplayTime from "@/components/Common/DisplayTime";
import * as styles from "./index.css";

type RestTimeProps = {
  time: Time;
};

const RestTime = ({ time }: RestTimeProps) => {
  return (
    <div className={styles.mainContainerStyle}>
      <div className={styles.workIconStyle}>
        <Babel width="24" height="24" color={theme.color.White100} />
      </div>
      <DisplayTime
        color={theme.color.White100}
        width={10}
        time={time}
        as="body"
        size="lg"
        weight="400"
      />
    </div>
  );
};

export default RestTime;
