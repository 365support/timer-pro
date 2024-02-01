import { Time } from "@/types/Time";

type Props = {
  name: string;
};

const NextSchedule = ({ name }: Props) => {
  return (
    <>
      <div>다음</div>
      <div>{name}</div>
    </>
  );
};

export default NextSchedule;
