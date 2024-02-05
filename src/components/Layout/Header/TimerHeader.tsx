import Text from "@/components/Text/Text";
import { Close, LockClosed, LockOpen } from "@/components/Icons";
import { theme } from "@/styles/theme.css";
import Header from ".";

type TimerHeaderProps = {
  scheduleName: string;
  isLock: boolean;
  onClickLeft?: () => void;
  onClickRight?: () => void;
};

const TimerHeader = ({
  scheduleName,
  isLock,
  onClickLeft,
  onClickRight,
}: TimerHeaderProps) => {
  return (
    <Header>
      <Header.Left onClick={onClickLeft}>
        <Close width="16" height="16" color={theme.color.White100} />
      </Header.Left>

      <Header.Center>
        <Text
          color={theme.color.White100}
          size={theme.fontSize.caption.sm}
          weight="bold"
          lineHeight="30px"
        >
          {scheduleName}
        </Text>
      </Header.Center>

      <Header.Right onClick={onClickRight}>
        {isLock ? (
          <LockClosed width="24" height="24" color={theme.color.White100} />
        ) : (
          <LockOpen width="24" height="24" color={theme.color.White100} />
        )}
      </Header.Right>
    </Header>
  );
};

export default TimerHeader;
