import { ElementType } from "react";
import Text from "@/components/Text/Text";
import { theme } from "@/styles/theme.css";
import * as style from "./index.css";

type NavItemProps = {
  Icon: ElementType;
  label: string;
  isActive: boolean;
};

const NavItem = ({ Icon, label, isActive }: NavItemProps) => {
  return (
    <div className={style.iconBox}>
      <Icon
        width="25"
        height="24"
        color={isActive ? theme.color.White100 : theme.color.gray050}
      />
      <Text
        size={theme.fontSize.caption.sm}
        color={isActive ? theme.color.White100 : theme.color.gray050}
      >
        {label}
      </Text>
    </div>
  );
};

export default NavItem;
