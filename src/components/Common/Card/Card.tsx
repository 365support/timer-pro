import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import { theme } from "@/styles/theme.css";
import { Combine } from "@/types/utils";
import CustomText, { CustomTextProps } from "../Text/CustomText";
import * as cardStyles from "./Card.css";

type CardProps = Combine<HTMLAttributes<HTMLDivElement>, CustomTextProps>;

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={clsx(cardStyles.CardStyle, className)} {...props}>
      {children}
    </div>
  );
};

const Title = ({
  as = "title",
  size = "md",
  weight = "normal",
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div className={className}>
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

const SubTitle = ({
  as = "body",
  size = "md",
  weight = "bold",
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div className={className}>
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

const Icon = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={clsx(cardStyles.cardIconStyle, className)} {...props}>
      {children}
    </div>
  );
};

Card.Title = Title;
Card.SubTitle = SubTitle;
Card.Icon = Icon;

export default Card;
