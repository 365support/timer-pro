import Text from "@/components/Text/Text";
import { Close } from "@/components/Icons";
import { theme } from "@/styles/theme.css";
import Header from ".";

type TimerHeaderProps = {
  onClickLeft?: () => void;
  onClickRight?: () => void;
};

const TimerSettingHeader = ({
  onClickLeft,
  onClickRight,
}: TimerHeaderProps) => {
  return (
    <Header>
      <Header.Left onClick={onClickLeft}>
        <Close width="16" height="16" color={theme.color.White100} />
      </Header.Left>

      <Header.Right onClick={onClickRight}>
        <Text
          color={theme.color.White100}
          size={theme.fontSize.body.md}
          weight="normal"
          lineHeight="20px"
        >
          완료
        </Text>
      </Header.Right>
    </Header>
  );
};

export default TimerSettingHeader;
