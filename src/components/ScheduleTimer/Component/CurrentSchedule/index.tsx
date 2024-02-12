import { Time } from "@/types/Time";
import CustomText from "@/components/Common/Text/CustomText";
import DisplayTime from "@/components/Common/DisplayTime";
import * as styles from "./index.css";

type Props = {
  name: string;
  time: Time;
};

const CurrentSchedule = ({ name, time }: Props) => {
  return (
    <div className={styles.scheduleContainerStyle}>
      <CustomText color="#999" as="body" size="md">
        {name}
      </CustomText>

      <DisplayTime
        width={40}
        time={time}
        color="#8778F0"
        as="title"
        size="xlg"
        weight="500"
      />
    </div>
  );
};

export default CurrentSchedule;
