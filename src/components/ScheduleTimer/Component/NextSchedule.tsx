import { Time } from "@/types/Time";

type Props = {
  name: string;
  time: Time;
};

const NextSchedule = ({ name, time }: Props) => {
  return (
    <>
      <div>현재: {name}</div>
      <div>
        남은 시간: {time.minutes}분 {time.seconds}초
      </div>
    </>
  );
};

export default NextSchedule;
