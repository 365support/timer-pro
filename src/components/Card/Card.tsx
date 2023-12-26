import React, { HTMLAttributes } from "react";
import { theme } from "@/styles/theme.css";
import CustomText from "../Text/CustomText";
import * as cardStyles from "./Card.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

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

const Text = ({ style, children, ...props }: CardProps) => {
  return (
    <div style={style}>
      <CustomText
        as="body"
        size="md"
        weight="bold"
        color={theme.color.White100}
        family={theme.font.korean}
        {...props}
      >
        {children}
      </CustomText>
    </div>
  );
};
const Number = ({ style, children, ...props }: CardProps) => {
  return (
    <div style={style}>
      <CustomText
        as="title"
        size="md"
        weight="normal"
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
