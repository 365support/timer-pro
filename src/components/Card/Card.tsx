import React, { HTMLAttributes } from "react";
import { theme } from "@/styles/theme.css";
import CustomText, { CustomTextProps } from "../Text/CustomText";
import * as cardStyles from "./Card.css";
import { Combine } from "@/types/utils";

interface CardProps
  extends Combine<HTMLAttributes<HTMLDivElement>, CustomTextProps> {}

const Card = ({ style, children, ...props }: CardProps) => {
  return (
    <div style={style} className={cardStyles.CardStyle} {...props}>
      {children}
    </div>
  );
};

const Icon = ({ style, children, ...props }: CardProps) => {
  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

const Text = ({
  style,
  as = "body",
  size = "md",
  weight = "bold",
  children,
  ...props
}: CardProps) => {
  return (
    <div style={style}>
      <CustomText
        as={as}
        size={size}
        weight={weight}
        color={theme.color.White100}
        family={theme.font.korean}
        {...props}
      >
        {children}
      </CustomText>
    </div>
  );
};

const Number = ({
  style,
  as = "title",
  size = "md",
  weight = "normal",
  children,
  ...props
}: CardProps) => {
  return (
    <div style={style}>
      <CustomText
        as={as}
        size={size}
        weight={weight}
        color={theme.color.White100}
        family={theme.font.number}
        {...props}
      >
        {children}
      </CustomText>
    </div>
  );
};

Card.Icon = Icon;
Card.Text = Text;
Card.Number = Number;

export default Card;
