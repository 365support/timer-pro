import { Time } from "@/types/Time";
import { formatToDoubleDigit } from "@/utils/formatToDoubleDigit";

type RestTimeProps = {
  time: Time;
};

const RestTime = ({ time }: RestTimeProps) => {
  return (
    <div>
      전체 남은 시간
      {formatToDoubleDigit(time.minutes)}: {formatToDoubleDigit(time.seconds)}
    </div>
  );
};

export default RestTime;
