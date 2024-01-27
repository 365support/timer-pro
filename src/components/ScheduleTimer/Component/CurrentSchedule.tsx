import { Time } from "@/types/Time";
import { formatToDoubleDigit } from "@/utils/formatToDoubleDigit";

type Props = {
  name: string;
  time: Time;
};

const CurrentSchedule = ({ name, time }: Props) => {
  return (
    <>
      <div>{name}</div>
      <div>
        {formatToDoubleDigit(time.minutes)}: {formatToDoubleDigit(time.seconds)}
      </div>
    </>
  );
};

export default CurrentSchedule;
