import CustomText from "@/components/Common/Text/CustomText";
import { theme } from "@/styles/theme.css";
import { nextContainerStyle } from "./index.css";

type Props = {
  name: string;
};

const NextSchedule = ({ name }: Props) => {
  return (
    <div className={nextContainerStyle}>
      <CustomText color="#999">다음</CustomText>
      <CustomText color={theme.color.White100} as="title" size="sm">
        {name}
      </CustomText>
    </div>
  );
};

export default NextSchedule;
