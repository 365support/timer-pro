import { assignInlineVars } from "@vanilla-extract/dynamic";
import { formatToDoubleDigit } from "@/utils/formatToDoubleDigit";
import { TypoScale, TypoType, theme } from "@/styles/theme.css";
import { Time } from "@/types/Time";
import CustomText from "../Text/CustomText";
import * as styles from "./index.css";

type Props = {
  width: number;
  time: Time;
  color: string;
  as: TypoType;
  size: TypoScale;
  weight: string;
};

const DisplayTime = ({ width, time, color, as, size, weight }: Props) => {
  const dynamicStyles = assignInlineVars({
    [styles.width]: `${width}px`,
  });

  const formattedTime = `${formatToDoubleDigit(
    time.minutes
  )}:${formatToDoubleDigit(time.seconds)}`;

  return (
    <div className={styles.timeContainerStyle}>
      {formattedTime.split("").map((char, index) => (
        <div
          className={styles.numberStyle}
          key={`${char}-${index}`}
          style={dynamicStyles}
        >
          <CustomText
            as={as}
            size={size}
            weight={weight}
            color={color}
            family={theme.font.number}
          >
            {char}
          </CustomText>
        </div>
      ))}
    </div>
  );
};

export default DisplayTime;
